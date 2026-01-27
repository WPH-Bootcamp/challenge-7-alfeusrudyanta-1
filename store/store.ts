import { configureStore } from '@reduxjs/toolkit';
import checkoutReducer from '@/store/slices/checkout-slice';
import addressReducer from '@/store/slices/address-slice';

export const store = configureStore({
  reducer: {
    checkout: checkoutReducer,
    address: addressReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
