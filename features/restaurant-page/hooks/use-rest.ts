import { useQuery } from '@tanstack/react-query';
import { apiRest } from '../api/api-rest';

export const useGetRest = (id: number) => {
  return useQuery({
    queryKey: ['restaurant', id],
    queryFn: () => {
      const data = {
        id,
        limitMenu: 50,
        limitReview: 6,
      };

      return apiRest.getRest(data);
    },
  });
};
