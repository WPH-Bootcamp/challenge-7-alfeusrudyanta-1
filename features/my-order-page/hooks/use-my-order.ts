import { useInfiniteQuery } from '@tanstack/react-query';
import { apiMyOrder } from '../api/api-my-order';
import { Status } from '../types';

const useMyOrder = (status: Status) => {
  return useInfiniteQuery({
    initialPageParam: 1,
    queryKey: ['order_status', status],
    queryFn: ({ pageParam }) => {
      const params = {
        page: pageParam,
        limit: 10,
      };
      const res = apiMyOrder.getMyOrder({ ...params, status });
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

export { useMyOrder };
