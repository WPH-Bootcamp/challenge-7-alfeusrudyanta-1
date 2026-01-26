export type DialogDataProps = {
  transactionId: string;
  restaurantId: number;
  menuIds: number[];
  onClose: () => void;
};

export type PostReviewReq = {
  transactionId: string;
  restaurantId: number;
  star: number;
  comment: string;
  menuIds: number[];
};

export type MenuItem = {
  menuId: number;
  menuName: string;
  price: number;
  type: string;
  image: string;
  quantity: number;
};

export type UserInfo = {
  id: number;
  name: string;
};

export type RestaurantInfo = {
  id: number;
  name: string;
};

export type ReviewDetails = {
  id: number;
  star: number;
  comment: string;
  transactionId: string;
  createdAt: string;
  user: UserInfo;
  restaurant: RestaurantInfo;
  menus: MenuItem[];
};

export type PostReviewRes = {
  success: boolean;
  message: string;
  data: {
    review: ReviewDetails;
  };
};
