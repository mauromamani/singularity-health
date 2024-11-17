import { Toaster } from '@/shared/components/ui/toaster';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { FC } from 'react';

interface Props {
  children: React.ReactNode;
}

const client = new QueryClient();

export const Providers: FC<Props> = ({ children }) => {
  return (
    <QueryClientProvider client={client}>
      {children}
      <Toaster />
    </QueryClientProvider>
  );
};
