import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnMount: true,
      refetchOnWindowFocus: true,
      refetchOnReconnect: true,
      staleTime: 0,
    },
  },
});
