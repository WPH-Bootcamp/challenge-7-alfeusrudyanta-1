export type PutProfileReq = {
  name: string;
  email: string;
  phone: string;
  avatar?: File;
};

export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar: string | null;
  createdAt: string;
  updatedAt: string;
};

export type PutProfileRes = {
  success: boolean;
  message: string;
  data: User;
};
