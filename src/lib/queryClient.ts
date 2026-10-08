import { QueryClient } from '@tanstack/react-query';

/**
 * Global QueryClient instance with performance-tuned defaults.
 * - staleTime: 1 minute (prevents redundant fetches on immediate re-mounts)
 * - gcTime: 5 minutes (keeps cached data in memory)
 * - refetchOnWindowFocus: false by default to save network requests during dev/regular usage
 */
export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 1, // 1 minute
      gcTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});
