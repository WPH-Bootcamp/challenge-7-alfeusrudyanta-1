import { apiCart } from '@/api/api-cart';
import { queryClient } from '@/lib/query-client-wrapper';
import { PostCartReq } from '@/types/api-cart';
import { useMutation, useQuery } from '@tanstack/react-query';

const useGetCart = () => {
  return useQuery({
    queryKey: ['cart'],
    queryFn: () => {
      return apiCart.getCart();
    },
  });
};

const usePostCart = () => {
  return useMutation({
    mutationFn: (data: PostCartReq) => {
      return apiCart.postCart(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });
};

export { useGetCart, usePostCart };
