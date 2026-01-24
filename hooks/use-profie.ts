import { apiProfile } from '@/api/api-profile';
import { useQuery } from '@tanstack/react-query';

const useGetProfile = () => {
  return useQuery({
    queryKey: ['profile'],
    queryFn: () => {
      return apiProfile.getProfile();
    },
  });
};

export { useGetProfile };
