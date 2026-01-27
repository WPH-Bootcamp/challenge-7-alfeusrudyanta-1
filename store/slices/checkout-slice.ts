import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type CheckoutState = {
  selectedBank: string;
  price: number;
  deliveryFee: number;
  serviceFee: number;
  totalPrice: number;
};

const initialState: CheckoutState = {
  selectedBank: 'Bank Negara Indonesia',
  price: 0,
  deliveryFee: 0,
  serviceFee: 0,
  totalPrice: 0,
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
