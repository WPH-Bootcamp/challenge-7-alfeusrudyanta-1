import { AxiosInstance } from '@/services/axios';
import type {
  PostRegisterReq,
  PostRegisterRes,
  PostLoginReq,
  PostLoginRes,
} from '@/features/authorization-page/types';

const apiAuth = {
  postRegister: async (data: PostRegisterReq): Promise<PostRegisterRes> => {
    const res = await AxiosInstance.post('/api/auth/register', data);
    return res.data;
  },
  postLogin: async (data: PostLoginReq): Promise<PostLoginRes> => {
    const res = await AxiosInstance.post('/api/auth/login', data);
    return res.data;
  },
};

export { apiAuth };
