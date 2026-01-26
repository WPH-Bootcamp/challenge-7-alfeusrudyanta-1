import { useMutation } from '@tanstack/react-query';
import { apiAuth } from '../api/api-authorization';
import type { PostRegisterReq } from '@/features/authorization-page/types/register';

const useRegister = () => {
  return useMutation({
    mutationFn: (data: PostRegisterReq) => {
      return apiAuth.postRegister(data);
    },
  });
};

export { useRegister };
