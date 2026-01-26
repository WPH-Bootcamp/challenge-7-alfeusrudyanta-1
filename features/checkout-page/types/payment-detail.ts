import { Dispatch, SetStateAction } from 'react';

export type PaymentDetailProps = {
  totalItem: number;
  price: number;
  deliveryFee: number;
  serviceFee: number;
  totalPrice: number;
  selectedBank: string;
  setSelectedBank: Dispatch<SetStateAction<string>>;
  handleCheckout: () => void;
  isPending: boolean;
};
