import { AxiosInstance } from '@/services/axios';
import {
  DeleteCartRes,
  GetCartRes,
  PostCartReq,
  PostCartRes,
  PutCartReq,
  PutCartRes,
} from '@/types/api-cart';

const apiCart = {
  getCart: async (): Promise<GetCartRes> => {
    const res = await AxiosInstance.get('/api/cart');
    return res.data;
  },

  postCart: async (data: PostCartReq): Promise<PostCartRes> => {
    const res = await AxiosInstance.post('/api/cart', data);
    return res.data;
  },

  putCart: async (data: PutCartReq, id: number): Promise<PutCartRes> => {
    const res = await AxiosInstance.put(`/api/cart/${id}`, data);
    return res.data;
  },

  deleteCart: async (id: number): Promise<DeleteCartRes> => {
    const res = await AxiosInstance.delete(`/api/cart/${id}`);
    return res.data;
  },
};

export { apiCart };
