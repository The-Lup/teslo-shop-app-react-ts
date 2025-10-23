import type { PropsWithChildren } from 'react';
import { RouterProvider } from 'react-router-dom';
import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { appRouter } from './app.router';

import { Toaster } from 'sonner';

import { CustomFullSCLoading } from './components/ui/custom/CustomFullSCLoading';
import { useAuthStore } from './auth/store/auth.store';

const queryClient = new QueryClient();

const CheckAuthProvider = ({ children }: PropsWithChildren) => {
  const { checkAuthStatus } = useAuthStore();

  const { isLoading } = useQuery({
    queryKey: ['auth'],
    queryFn: checkAuthStatus,
    retry: false,
    refetchInterval: 1000 * 60 * 1.5, //1H30M
    refetchOnWindowFocus: true,
  });

  if (isLoading) return <CustomFullSCLoading />;

  return children;
};

export const TesloShopApp = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <CheckAuthProvider>
        <RouterProvider router={appRouter} />
      </CheckAuthProvider>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};
