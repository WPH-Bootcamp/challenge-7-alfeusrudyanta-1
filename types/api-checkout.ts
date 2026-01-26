export type Pricing = {
  subtotal: number;
  serviceFee: number;
  deliveryFee: number;
  totalPrice: number;
};

export type OrderItem = {
  menuId: number;
  menuName: string;
  price: number;
  quantity: number;
  itemTotal: number;
};

export type Restaurant = {
  id: number;
  name: string;
  logo: string;
};

export type RestaurantOrder = {
  restaurant: Restaurant;
  items: OrderItem[];
  subtotal: number;
};

export type Transaction = {
  id: number;
  transactionId: string;
  paymentMethod: string;
  status: string;
  deliveryAddress: string;
  phone: string;
  pricing: Pricing;
  restaurants: RestaurantOrder[];
  createdAt: string;
};

export type PostOrderCheckoutRes = {
  success: boolean;
  message: string;
  data: {
    transaction: Transaction;
  };
};

export type MenuOrderDetail = {
  menuId: number;
  quantity: number;
};

export type RestaurantOrderDetail = {
  restaurantId: number;
  items: MenuOrderDetail[];
};

export type PostOrderCheckoutReq = {
  restaurants: RestaurantOrderDetail[];
  deliveryAddress: string;
  phone: string;
  paymentMethod: string;
  notes: string;
};
