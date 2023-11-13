import {createSlice} from '@reduxjs/toolkit';
import {Product} from '../../../domain/Product';

export interface ProductsState {
  products: Product[];
}

const initialState: ProductsState = {
  products: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productsSlice.reducer;
