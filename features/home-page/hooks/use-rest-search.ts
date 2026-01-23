import { useInfiniteQuery } from '@tanstack/react-query';
import { apiHome } from '../api/api-home';

const useRestSearch = (q: string) => {
  return useInfiniteQuery({
    queryKey: ['restaurants', 'search', q],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => {
      const params = {
        page: pageParam,
        limit: 20,
      };
      const res = apiHome.getRestoSearch({ ...params, q });
      return res;
    },
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.data.pagination.page + 1;
      return nextPage <= lastPage.data.pagination.totalPages
        ? nextPage
        : undefined;
    },
  });
};

export { useRestSearch };
