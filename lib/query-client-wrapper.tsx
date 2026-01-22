'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

type QueryClientWrapperProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * 1000,
      gcTime: 5 * 60 * 1000,
      retry: 1,
    },
    mutations: {
      retry: 0,
    },
  },
});

const QueryClientWrapper: React.FC<QueryClientWrapperProps> = ({
  children,
}) => {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export { QueryClientWrapper };
