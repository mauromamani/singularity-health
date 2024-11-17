import { useMutation } from '@tanstack/react-query';
import { login } from '../api/auth.api';

export const useLogin = () => {
  return useMutation({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    mutationFn: async (body: any) => {
      const { data } = await login(body);

      return data.token;
    },
    onSuccess: (data) => {
      localStorage.setItem('token', data);
    },
  });
};
