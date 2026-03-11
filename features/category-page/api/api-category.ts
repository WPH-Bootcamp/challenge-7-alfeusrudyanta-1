import { AxiosInstance } from '@/services/axios';
import {
  getRestCategoryReq,
  getRestCategoryRes,
} from '@/features/category-page/types/category';

const apiCategory = {
  getRestFilter: async (
    params: getRestCategoryReq
  ): Promise<getRestCategoryRes> => {
    const res = await AxiosInstance.get('/api/resto', { params });
    return res.data;
  },
};

export { apiCategory };
