import { useMutation } from '@tanstack/react-query';
import { apiAuth } from '../api/api-authorization';
import type { PostLoginReq } from '../types';

const useLogin = () => {
  return useMutation({
    mutationFn: (data: PostLoginReq) => {
      return apiAuth.postLogin(data);
    },
  });
};

export { useLogin };
