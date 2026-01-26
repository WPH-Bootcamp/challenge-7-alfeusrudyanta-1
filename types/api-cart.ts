export type CartMenuItem = {
  id: number;
  foodName: string;
  price: number;
  type: 'food' | 'drink';
  image: string;
};

export type CartItem = {
  id: number;
  menu: CartMenuItem;
  quantity: number;
  itemTotal: number;
};

export type Restaurant = {
  id: number;
  name: string;
  logo: string;
};

export type CartRestaurant = {
  restaurant: Restaurant;
  items: CartItem[];
  subtotal: number;
};

export type CartSummary = {
  totalItems: number;
  totalPrice: number;
  restaurantCount: number;
};

export type CartData = {
  cart: CartRestaurant[];
  summary: CartSummary;
};

export type GetCartRes = {
  success: boolean;
  message: string;
  data: CartData;
};

export type PostCartReq = {
  restaurantId: number;
  menuId: number;
  quantity: number;
};

export type PostCartItem = {
  id: number;
  restaurant: Restaurant;
  menu: CartMenuItem;
  quantity: number;
  itemTotal: number;
};

export type PostCartRes = {
  success: boolean;
  message: string;
  data: {
    cartItem: PostCartItem;
  };
};

export type PutCartReq = {
  quantity: number;
};

export type PutCartRes = PostCartItem;

export type DeleteCartRes = {
  success: boolean;
  message: string;
  data: null;
};
