import { useMutation } from '@tanstack/react-query';
import { apiAuth } from '../api/api-authorization';
import type { PostLoginReq } from '../types';
import Cookies from 'js-cookie';

const useLogin = () => {
  return useMutation({
    mutationFn: (data: PostLoginReq) => {
      return apiAuth.postLogin(data);
    },
    onSuccess: (res) => {
      Cookies.set('token', res.data.token, {
        sameSite: 'Strict',
        expires: 7,
        path: '/',
      });
    },
  });
};

export { useLogin };
