type UserDataWithCreatedAt = {
  id: number;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
};

type PostRegisterReq = {
  name: string;
  email: string;
  phone: string;
  password: string;
};

type PostRegisterRes = {
  success: boolean;
  message: string;
  data: {
    user: UserDataWithCreatedAt;
    token: string;
  };
};

export type { PostRegisterReq, PostRegisterRes };
