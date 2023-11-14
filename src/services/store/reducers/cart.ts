import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {Product} from '../../../domain/Product';
import {RootState} from '../store';

export interface CartState {
  products: Product[];
}

const initialState: CartState = {
  products: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increaseCounter: (state, action: PayloadAction<Product>) => {
      const index = state.products.findIndex(
        product => product.id === action.payload.id,
      );
      if (index > -1) {
        state.products[index].count++;
      } else {
        state.products.push(action.payload);
      }
    },
    decreaseCounter: (state, action: PayloadAction<Product>) => {
      const index = state.products.findIndex(
        product => product.id === action.payload.id,
      );
      if (index > -1) {
        if (state.products[index].count === 1) {
          state.products = state.products.filter(
            pr => pr.id !== action.payload.id,
          );
        } else {
          state.products[index].count--;
        }
      }
    },
  },
});

export const {increaseCounter} = cartSlice.actions;

export const selectCartProducts = (state: RootState) => state.cart.products;

export default cartSlice.reducer;
