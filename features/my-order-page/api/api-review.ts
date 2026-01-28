import { AxiosInstance } from '@/services/axios';
import {
  PostReviewReq,
  PostReviewRes,
} from '@/features/my-order-page/types/dialog';

const apiReview = {
  postReview: async (data: PostReviewReq): Promise<PostReviewRes> => {
    const res = await AxiosInstance.post('/api/review', data);
    return res.data;
  },
};

export { apiReview };
