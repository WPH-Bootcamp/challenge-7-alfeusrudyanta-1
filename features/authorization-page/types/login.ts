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

export type { PostLoginReq, PostLoginRes };
