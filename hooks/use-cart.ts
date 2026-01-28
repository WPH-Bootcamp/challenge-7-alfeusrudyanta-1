import { apiCart } from '@/api/api-cart';
import { queryClient } from '@/lib/query-client-wrapper';
import { PostCartReq, PutCartReq } from '@/types/api-cart';
import { useMutation, useQuery } from '@tanstack/react-query';
import Cookies from 'js-cookie';

export const useGetCart = () => {
  return useQuery({
    queryKey: ['cart'],
    queryFn: () => {
      return apiCart.getCart();
    },
    throwOnError: true,
    enabled: !!Cookies.get('token'),
  });
};

export const usePostCart = () => {
  return useMutation({
    mutationFn: (data: PostCartReq) => {
      return apiCart.postCart(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
  });
};

export const usePutCart = (id: number) => {
  return useMutation({
    mutationFn: (data: PutCartReq) => {
      return apiCart.putCart(data, id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
    throwOnError: true,
  });
};

export const useDeleteCart = () => {
  return useMutation({
    mutationFn: (id: number) => {
      return apiCart.deleteCart(id);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cart'] });
    },
    throwOnError: true,
  });
};
