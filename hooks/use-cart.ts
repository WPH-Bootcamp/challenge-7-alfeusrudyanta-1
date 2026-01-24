import { apiCart } from '@/api/api-cart';
import { useQuery } from '@tanstack/react-query';

const useGetCart = () => {
  return useQuery({
    queryKey: ['cart'],
    queryFn: () => {
      return apiCart.getCart();
    },
  });
};

export { useGetCart };
