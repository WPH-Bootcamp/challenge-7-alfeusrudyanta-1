import { AxiosInstance } from '@/services/axios';
import { GetMyOrderReqParams, GetMyOrderRes } from '../types/my-order';

const apiMyOrder = {
  getMyOrder: async (params: GetMyOrderReqParams): Promise<GetMyOrderRes> => {
    const res = await AxiosInstance.get('/api/order/my-order', { params });
    return res.data;
  },
};

export { apiMyOrder };
