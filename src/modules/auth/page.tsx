import { WaveOrangeLoginSVG } from '@/shared/assets/svg/wave-orange-login';
import { PerroLoginSVG } from '@/shared/assets/svg/perro-login';
import { LoginForm } from './components/form';

const Login = () => {
  return (
    <main className='relative min-h-svh bg-pet-white-900 z-50 flex items-center overflow-hidden md:px-20'>
      <section className='w-1/2 hidden lg:flex justify-center'>
        <div className='mr-32'>
          <PerroLoginSVG />
        </div>
      </section>

      <LoginForm />

      <WaveOrangeLoginSVG />
    </main>
  );
};

export default Login;
