import { AxiosInstance } from '@/services/axios';
import { getRestCategoryReq, getRestCategoryRes } from '../types';

const apiCategory = {
  getRestFilter: async (
    params: getRestCategoryReq
  ): Promise<getRestCategoryRes> => {
    const res = await AxiosInstance.get('/api/resto', { params });
    return res.data;
  },
};

export { apiCategory };
