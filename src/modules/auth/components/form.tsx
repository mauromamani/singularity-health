import { useLogin } from '../queries/login.query';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/shared/components/ui/form';
import { HttpLoginResponse } from '../types';
import { AxiosError } from 'axios';
import { useToast } from '@/shared/hooks/use-toast';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';
import { FloatingInput } from '@/shared/components/custom/floating-input';

const formSchema = z.object({
  email: z.string().email({ message: 'El email no es válido.' }),
  password: z.string().min(4, {
    message: 'Contraseña no válida. Debe tener al menos 4 caracteres.',
  }),
});

export const LoginForm = () => {
  const navigate = useNavigate();
  const login = useLogin();
  const { toast } = useToast();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // george.bluth@reqres.in
      email: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    login.mutate(values, {
      onSuccess: () => {
        toast({
          variant: 'default',
          title: 'Login Éxitoso',
        });
        navigate('/');
      },
      onError: (error) => {
        const axiosError = error as AxiosError;
        const err = (axiosError.response?.data as HttpLoginResponse).error;

        toast({
          variant: 'destructive',
          title: 'Error',
          description: err,
        });
      },
    });
  };

  return (
    <section className='w-full lg:w-1/2 pr-12 mb-12 lg:ml-12 mt-20'>
      <div className='ml-20 max-w-2xl'>
        <h2 className='font-bold text-[25px] bienvenido relative ml-12 mb-12 text-[#4D4F5C]'>
          BIENVENIDO
        </h2>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className='grid grid-cols-1'
          >
            <FormField
              control={form.control}
              name='email'
              render={({ field }) => (
                <FormItem className='mb-8'>
                  <FormControl>
                    <FloatingInput
                      value={field.value}
                      placeholder='EMAIL'
                      onChange={field.onChange}
                      type='email'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name='password'
              render={({ field }) => (
                <FormItem className='mb-8'>
                  <FormControl>
                    <FloatingInput
                      value={field.value}
                      placeholder='CONTRASEÑA'
                      onChange={field.onChange}
                      type='password'
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <p className='text-right text-gray-400 mb-12'>
              <a href='#'>¿Olvidaste tu contraseña?</a>
            </p>

            <div className='flex justify-center mb-8'>
              <button
                style={{ boxShadow: '0px 3px 3px 0 rgba(44,29,173,0.16)' }}
                className='text-pet-white-1000 rounded-full text-xl font-bold bg-pet-blue-1000 px-9 py-6 disabled:bg-blue-300 w-[240px]'
                type='submit'
                disabled={login.isPending || !form.formState.isValid}
              >
                {login.isPending ? 'CARGANDO...' : 'INICIAR SESIÓN'}
              </button>
            </div>

            <p className='text-gray-400 text-center'>
              AÚN NO TENGO CUENTA{' '}
              <a href='#' className='text-pet-blue-1000'>
                REGISTRARSE
              </a>
            </p>
          </form>
        </Form>
      </div>
    </section>
  );
};
