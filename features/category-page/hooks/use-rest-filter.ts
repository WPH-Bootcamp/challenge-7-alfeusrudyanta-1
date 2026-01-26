import { useInfiniteQuery } from '@tanstack/react-query';
import { getRestCategory } from '@/features/category-page/types/category';
import { apiCategory } from '../api/api-category';

const useRestFilter = (data: getRestCategory) => {
  return useInfiniteQuery({
    queryKey: ['restaurants', 'filter', data],
    initialPageParam: 1,
    queryFn: ({ pageParam }) => {
      const params = {
        page: pageParam,
        limit: 20,
      };

      const res = apiCategory.getRestFilter({ ...params, ...data });
      return res;
    },
    getNextPageParam: (lastPage) => {
      const nextPage = lastPage.data.pagination.page + 1;
      return nextPage + 1 <= lastPage.data.pagination.totalPages
        ? nextPage
        : undefined;
    },
  });
};

export { useRestFilter };
