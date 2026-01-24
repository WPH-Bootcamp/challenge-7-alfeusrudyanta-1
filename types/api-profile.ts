type Profile = {
  id: number;
  name: string;
  email: string;
  phone: string;
  avatar: string;
  createdAt: string;
  updatedAt: string;
};

type GetProfileRes = {
  success: boolean;
  message: string;
  data: Profile;
};

export type { GetProfileRes };
