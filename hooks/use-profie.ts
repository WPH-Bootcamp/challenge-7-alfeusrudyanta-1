import { apiProfile } from '@/api/api-profile';
import { PutProfileReq } from '@/types/api-profile';
import { useMutation, useQuery } from '@tanstack/react-query';
import Cookies from 'js-cookie';

const isLoggedIn = Cookies.get('token');

export const useGetProfile = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: () => {
      return apiProfile.getProfile();
    },
    throwOnError: true,
    enabled: !!isLoggedIn,
  });
};

export const usePutProfile = () => {
  return useMutation({
    mutationFn: (data: PutProfileReq) => {
      return apiProfile.putProfile(data);
    },
  });
};
