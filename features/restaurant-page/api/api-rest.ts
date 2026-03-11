import { AxiosInstance } from '@/services/axios';
import { GetRestReq, GetRestRes } from '../types/rest';

export const apiRest = {
  getRest: async (params: GetRestReq): Promise<GetRestRes> => {
    const res = await AxiosInstance.get(`/api/resto/${params.id}`, { params });
    return res.data;
  },
};
