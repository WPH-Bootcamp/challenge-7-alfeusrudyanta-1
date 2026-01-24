import { AxiosInstance } from '@/services/axios';
import { GetProfileRes } from '@/types/api-profile';

const apiProfile = {
  getProfile: async (): Promise<GetProfileRes> => {
    const res = await AxiosInstance.get('/api/auth/profile');
    return res.data;
  },
};

export { apiProfile };
