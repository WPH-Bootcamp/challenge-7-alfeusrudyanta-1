export type GetReviewRestParamsReq = {
  restaurantId: number;
  page: number;
  limit: number;
};

export type ReviewMenu = {
  menuId: number;
  menuName: string;
  price: number;
  type: 'food' | 'drink';
  image: string;
  quantity: number;
};

export type ReviewUser = {
  id: number;
  name: string;
  avatar: string | null;
};

export type Review = {
  id: number;
  star: number;
  comment: string;
  transactionId: string;
  createdAt: string;
  user: ReviewUser;
  menus: ReviewMenu[];
};

export type Pagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export type ReviewsData = {
  reviews: Review[];
  pagination: Pagination;
};

export type GetReviewRestRes = {
  success: boolean;
  message: string;
  data: ReviewsData;
};
