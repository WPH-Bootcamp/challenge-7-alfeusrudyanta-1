export type Status =
  | 'preparing'
  | 'on_the_way'
  | 'delivered'
  | 'done'
  | 'cancelled';

export type GetMyOrderReqParams = {
  status: Status;
  page: number;
  limit: number;
};

export type Pricing = {
  subtotal: number;
  serviceFee: number;
  deliveryFee: number;
  totalPrice: number;
};

export type Restaurant = {
  id: number;
  name: string;
  logo: string;
};

export type OrderItem = {
  menuId: number;
  menuName: string;
  price: number;
  image: string;
  quantity: number;
  itemTotal: number;
};

export type RestaurantOrder = {
  restaurant: Restaurant;
  items: OrderItem[];
  subtotal: number;
};

export type Order = {
  id: number;
  transactionId: string;
  status: string;
  paymentMethod: string;
  deliveryAddress: string;
  phone: string;
  pricing: Pricing;
  restaurants: RestaurantOrder[];
  createdAt: string;
  updatedAt: string;
};

export type Pagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

export type OrderListData = {
  orders: Order[];
  pagination: Pagination;
  filter: Status;
};

export type GetMyOrderRes = {
  success: boolean;
  message: string;
  data: OrderListData;
};
