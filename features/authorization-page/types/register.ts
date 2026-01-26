export type UserDataWithCreatedAt = {
  id: number;
  name: string;
  email: string;
  phone: string;
  createdAt: string;
};

export type PostRegisterReq = {
  name: string;
  email: string;
  phone: string;
  password: string;
};

export type PostRegisterRes = {
  success: boolean;
  message: string;
  data: {
    user: UserDataWithCreatedAt;
    token: string;
  };
};

export type RegisterFormErrors = {
  name?: string;
  email?: string;
  phone?: string;
  password?: string;
  general?: string;
};
