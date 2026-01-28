import { useInfiniteQuery } from '@tanstack/react-query';
import { apiHome } from '../api/api-home';

const useRestBestSeller = () => {
  return useInfiniteQuery({
    queryKey: ['restaurants', 'best-seller'],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => {
      const params = {
        page: pageParam,
        limit: 20,
      };
      const res = apiHome.getRestoBestSeller(params);
      return res;
    },
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.data.pagination.page + 1;
      return nextPage <= lastPage.data.pagination.totalPages
        ? nextPage
        : undefined;
    },
    throwOnError: true,
  });
};

export { useRestBestSeller };
