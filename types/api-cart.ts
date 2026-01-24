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

type CartRestaurant = {
  id: number;
  name: string;
  logo: string;
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

export type { GetCartRes };
