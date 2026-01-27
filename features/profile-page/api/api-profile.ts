import { AxiosInstance } from '@/services/axios';
import { PutProfileReq, PutProfileRes } from '../types/profile';

export const apiProfile = {
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
