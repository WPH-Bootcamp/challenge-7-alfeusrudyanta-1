import { AxiosInstance } from '@/services/axios';
import { GetCartRes } from '@/types/api-cart';

const apiCart = {
  getCart: async (): Promise<GetCartRes> => {
    const res = await AxiosInstance.get('/api/cart');
    return res.data;
  },
};

export { apiCart };
