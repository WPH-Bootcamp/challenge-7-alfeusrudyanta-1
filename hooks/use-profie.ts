import { apiProfile } from '@/api/api-profile';
import { PutProfileReq } from '@/types/api-profile';
import { useMutation, useQuery } from '@tanstack/react-query';

export const useGetProfile = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: () => {
      return apiProfile.getProfile();
    },
    throwOnError: true,
  });
};

export const usePutProfile = () => {
  return useMutation({
    mutationFn: (data: PutProfileReq) => {
      return apiProfile.putProfile(data);
    },
  });
};
