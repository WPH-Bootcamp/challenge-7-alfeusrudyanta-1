type Status = 'preparing' | 'on_the_way' | 'delivered' | 'done' | 'cancelled';

type GetMyOrderReqParams = {
  status: Status;
  page: number;
  limit: number;
};

type Pricing = {
  subtotal: number;
  serviceFee: number;
  deliveryFee: number;
  totalPrice: number;
};

type Restaurant = {
  id: number;
  name: string;
  logo: string;
};

type OrderItem = {
  menuId: number;
  menuName: string;
  price: number;
  image: string;
  quantity: number;
  itemTotal: number;
};

type RestaurantOrder = {
  restaurant: Restaurant;
  items: OrderItem[];
  subtotal: number;
};

type Order = {
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

type Pagination = {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
};

type OrderListData = {
  orders: Order[];
  pagination: Pagination;
  filter: Status;
};

type GetMyOrderRes = {
  success: boolean;
  message: string;
  data: OrderListData;
};

export type { GetMyOrderReqParams, GetMyOrderRes, Status, Order };
