type DialogDataProps = {
  transactionId: string;
  restaurantId: number;
  menuIds: number[];
  onClose: () => void;
};

type PostReviewReq = {
  transactionId: string;
  restaurantId: number;
  star: number;
  comment: string;
  menuIds: number[];
};

interface MenuItem {
  menuId: number;
  menuName: string;
  price: number;
  type: string;
  image: string;
  quantity: number;
}

interface UserInfo {
  id: number;
  name: string;
}

type RestaurantInfo = {
  id: number;
  name: string;
};

type ReviewDetails = {
  id: number;
  star: number;
  comment: string;
  transactionId: string;
  createdAt: string;
  user: UserInfo;
  restaurant: RestaurantInfo;
  menus: MenuItem[];
};

type PostReviewRes = {
  success: boolean;
  message: string;
  data: {
    review: ReviewDetails;
  };
};

export type { DialogDataProps, PostReviewReq, PostReviewRes };
