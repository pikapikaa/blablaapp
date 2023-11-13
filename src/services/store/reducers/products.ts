import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {Product} from '../../../domain/Product';
import {client} from '../api';
import {RootState} from '../store';
const URL = `https://dummyjson.com/products`;

export interface ProductsState {
  products: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | undefined;
}

const initialState: ProductsState = {
  products: [],
  status: 'idle',
  error: undefined,
};

const fetchAsyncThunk = (prefix: string) => {
  return createAsyncThunk(prefix, async (query: string) => {
    const response = await client(URL + query);
    return response;
  });
};

export const fetchProducts = fetchAsyncThunk('products/fetchProducts');

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.products = action.payload.products;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const selectProducts = (state: RootState) => state.products.products;
export const selectStatus = (state: RootState) => state.products.status;
export const selectError = (state: RootState) => state.products.error;

export default productsSlice.reducer;
