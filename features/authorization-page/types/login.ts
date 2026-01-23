type UserData = {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar: string | null;
};

type PostLoginReq = {
  email: string;
  password: string;
};

type PostLoginRes = {
  success: boolean;
  message: string;
  data: {
    user: UserData;
    token: string;
  };
};

type LoginFormErrors = {
  email?: string;
  password?: string;
  general?: string;
};

export type { PostLoginReq, PostLoginRes, LoginFormErrors };
