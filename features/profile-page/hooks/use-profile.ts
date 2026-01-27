import { useMutation } from '@tanstack/react-query';
import { apiProfile } from '../api/api-profile';
import { PutProfileReq } from '../types/profile';

export const usePutProfile = () => {
  return useMutation({
    mutationFn: (data: PutProfileReq) => {
      return apiProfile.putProfile(data);
    },
  });
};
