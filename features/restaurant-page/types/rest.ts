export type GetRestReq = {
  id: number;
  limitMenu: number;
  limitReview: number;
};

export type Coordinates = {
  lat: number;
  long: number;
};

export type MenuItem = {
  id: number;
  foodName: string;
  price: number;
  type: 'food' | 'drink';
  image: string;
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
  createdAt: string;
  user: ReviewUser;
};

export type RestaurantData = {
  id: number;
  name: string;
  star: number;
  averageRating: number;
  place: string;
  coordinates: Coordinates;
  logo: string;
  images: string[];
  category: string;
  totalMenus: number;
  totalReviews: number;
  menus: MenuItem[];
  reviews: Review[];
};

export type GetRestRes = {
  success: boolean;
  message: string;
  data: RestaurantData;
};
