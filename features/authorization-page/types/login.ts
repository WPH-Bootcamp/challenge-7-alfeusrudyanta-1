export type UserData = {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar: string | null;
};

export type PostLoginReq = {
  email: string;
  password: string;
};

export type PostLoginRes = {
  success: boolean;
  message: string;
  data: {
    user: UserData;
    token: string;
  };
};

export type LoginFormErrors = {
  email?: string;
  password?: string;
  general?: string;
};
