import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

type AddressState = {
  address: string;
};

const initialState: AddressState = {
  address: 'Jl. Sudirman No. 25, Jakarta Pusat, 10220',
};

const addressSlice = createSlice({
  name: 'address',
  initialState,
  reducers: {
    setAddress: (state, action: PayloadAction<AddressState>) => {
      return { ...action.payload };
    },
  },
});

export const { setAddress } = addressSlice.actions;

export default addressSlice.reducer;

export const selectAddress = (state: RootState) => state.address.address;
