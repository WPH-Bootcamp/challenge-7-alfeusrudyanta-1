import { AxiosInstance } from '@/services/axios';
import type {
  PostLoginReq,
  PostLoginRes,
} from '@/features/authorization-page/types/login';
import type {
  PostRegisterReq,
  PostRegisterRes,
} from '@/features/authorization-page/types/register';

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
