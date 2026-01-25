import { AxiosInstance } from '@/services/axios';
import { GetCartRes, PostCartReq, PostCartRes } from '@/types/api-cart';

const apiCart = {
  getCart: async (): Promise<GetCartRes> => {
    const res = await AxiosInstance.get('/api/cart');
    return res.data;
  },

  postCart: async (data: PostCartReq): Promise<PostCartRes> => {
    const res = await AxiosInstance.post('/api/cart', data);
    return res.data;
  },
};

export { apiCart };
