import { AxiosInstance } from '@/services/axios';
import type {
  BestRestoReqParams,
  SearchRestoReqParams,
  RestaurantResponse,
} from '../types';

const apiHome = {
  getRestoBestSeller: async (
    params: BestRestoReqParams
  ): Promise<RestaurantResponse> => {
    const res = await AxiosInstance.get('/api/resto/best-seller', { params });
    return res.data;
  },

  getRestoSearch: async (
    params: SearchRestoReqParams
  ): Promise<RestaurantResponse> => {
    const res = await AxiosInstance.get('/api/resto/search', {
      params,
    });
    return res.data;
  },
};

export { apiHome };
