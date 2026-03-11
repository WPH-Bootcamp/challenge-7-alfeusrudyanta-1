import { useInfiniteQuery } from '@tanstack/react-query';
import { apiReview } from '../api/api-review';

export const useGetReviewRest = (restaurantId: number) => {
  return useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['review', restaurantId],
    queryFn: ({ pageParam }) => {
      const params = {
        page: pageParam,
        limit: 6,
      };
      return apiReview.getReviewRest({ ...params, restaurantId });
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
