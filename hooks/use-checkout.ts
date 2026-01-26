import { apiCheckout } from '@/api/api-checkout';
import { PostOrderCheckoutReq } from '@/types/api-checkout';
import { useMutation } from '@tanstack/react-query';

export const useCheckout = () => {
  return useMutation({
    mutationFn: (data: PostOrderCheckoutReq) => {
      return apiCheckout.postOrderCheckout(data);
    },
  });
};
