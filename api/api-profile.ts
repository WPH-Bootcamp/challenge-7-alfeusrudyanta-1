import { AxiosInstance } from '@/services/axios';
import {
  GetProfileRes,
  PutProfileReq,
  PutProfileRes,
} from '@/types/api-profile';

const apiProfile = {
  getProfile: async (): Promise<GetProfileRes> => {
    const res = await AxiosInstance.get('/api/auth/profile');
    return res.data;
  },

  putProfile: async (data: PutProfileReq): Promise<PutProfileRes> => {
    const formData = new FormData();

    formData.append('name', data.name || '');
    formData.append('email', data.email || '');
    formData.append('phone', data.phone || '');

    if (data.avatar === null) {
      formData.append('avatar', '');
    } else if (data.avatar instanceof File) {
      formData.append('avatar', data.avatar);
    }

    const res = await AxiosInstance.put('/api/auth/profile', formData, {
      headers: { 'Content-Type': '' },
    });
    return res.data;
  },
};

export { apiProfile };
