import { AxiosInstance } from '@/services/axios';
import { GetReviewRestParamsReq, GetReviewRestRes } from '../types/review';

export const apiReview = {
  getReviewRest: async (
    params: GetReviewRestParamsReq
  ): Promise<GetReviewRestRes> => {
    const res = await AxiosInstance.get(
      `/api/review/restaurant/${params.restaurantId}`,
      { params }
    );
    return res.data;
  },
};
