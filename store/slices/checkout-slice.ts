import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type CheckoutState = {
  selectedBank: string;
  price: number;
  deliveryFee: number;
  serviceFee: number;
  totalPrice: number;
  totalItem: number;
  date: string;
};

const initialState: CheckoutState = {
  selectedBank: '',
  price: 0,
  deliveryFee: 0,
  serviceFee: 0,
  totalPrice: 0,
  totalItem: 0,
  date: '',
};

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    setCheckout: (state, action: PayloadAction<CheckoutState>) => {
      return { ...action.payload };
    },
  },
});

export const { setCheckout } = checkoutSlice.actions;

export default checkoutSlice.reducer;

export const selectCheckoutState = (state: RootState) => state.checkout;
