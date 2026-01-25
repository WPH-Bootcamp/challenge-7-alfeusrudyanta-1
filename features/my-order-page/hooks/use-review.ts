import { useMutation } from '@tanstack/react-query';
import { PostReviewReq } from '../types';
import { apiReview } from '../api/api-review';

const usePostReview = () => {
  return useMutation({
    mutationFn: (data: PostReviewReq) => {
      return apiReview.postReview(data);
    },
  });
};

export { usePostReview };
