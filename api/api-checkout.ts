import { AxiosInstance } from '@/services/axios';
import {
  PostOrderCheckoutReq,
  PostOrderCheckoutRes,
} from '@/types/api-checkout';

export const apiCheckout = {
  postOrderCheckout: async (
    data: PostOrderCheckoutReq
  ): Promise<PostOrderCheckoutRes> => {
    const res = await AxiosInstance.post('/api/order/checkout', data);
    return res.data;
  },
};
