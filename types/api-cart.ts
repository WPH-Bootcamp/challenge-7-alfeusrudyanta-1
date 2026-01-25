type CartMenuItem = {
  id: number;
  foodName: string;
  price: number;
  type: 'food' | 'drink';
  image: string;
};

type CartItem = {
  id: number;
  menu: CartMenuItem;
  quantity: number;
  itemTotal: number;
};

type Restaurant = {
  id: number;
  name: string;
  logo: string;
};

type CartRestaurant = {
  restaurant: Restaurant;
  items: CartItem[];
  subtotal: number;
};

type CartSummary = {
  totalItems: number;
  totalPrice: number;
  restaurantCount: number;
};

type CartData = {
  cart: CartRestaurant[];
  summary: CartSummary;
};

type GetCartRes = {
  success: boolean;
  message: string;
  data: CartData;
};

type PostCartReq = {
  restaurantId: number;
  menuId: number;
  quantity: number;
};

type PostCartItem = {
  id: number;
  restaurant: Restaurant;
  menu: CartMenuItem;
  quantity: number;
  itemTotal: number;
};

type PostCartRes = {
  success: boolean;
  message: string;
  data: {
    cartItem: PostCartItem;
  };
};

export type { GetCartRes, PostCartReq, PostCartRes, CartRestaurant };
