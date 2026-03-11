import { apiProfile } from '@/api/api-profile';
import { queryClient } from '@/lib/query-client-wrapper';
import { PutProfileReq } from '@/types/api-profile';
import { useMutation, useQuery } from '@tanstack/react-query';
import Cookies from 'js-cookie';

export const useGetProfile = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: () => {
      return apiProfile.getProfile();
    },
    throwOnError: true,
    enabled: !!Cookies.get('token'),
  });
};

export const usePutProfile = () => {
  return useMutation({
    mutationFn: (data: PutProfileReq) => {
      return apiProfile.putProfile(data);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['profile'] });
    },
  });
};
