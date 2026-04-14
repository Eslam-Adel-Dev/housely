import { QueryClient } from "@tanstack/react-query";

//=========================================

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 10, // Data stays "fresh" for 10 minutes
      gcTime: 1000 * 60 * 30, // Keep unused data in cache for 30 mins
      retry: 1, // Only retry failed requests once
      refetchOnWindowFocus: false, // Don't refetch every time you switch apps
    },
  },
});

//=========================================

export default queryClient;
