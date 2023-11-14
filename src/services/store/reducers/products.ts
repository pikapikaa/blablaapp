import {PayloadAction, createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {Product} from '../../../domain/Product';
import {client} from '../api';
import {RootState} from '../store';
const URL = `https://dummyjson.com/products`;

type ProductPayload = {
  products: Product[];
};

export interface ProductsState {
  products: Product[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | undefined;
  currentProduct: Product | null;
}

const initialState: ProductsState = {
  products: [],
  status: 'idle',
  error: undefined,
  currentProduct: null,
};

const fetchAsyncThunk = (prefix: string) => {
  return createAsyncThunk(prefix, async (query: string) => {
    const response = await client(URL + query);
    return response;
  });
};

export const fetchProducts = fetchAsyncThunk('products/fetchProducts');
export const fetchProduct = fetchAsyncThunk('products/fetchProduct');

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProduct: (state, action: PayloadAction<Product>) => {
      state.currentProduct = action.payload;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetchProducts.pending, state => {
        state.status = 'loading';
      })
      .addCase(
        fetchProducts.fulfilled,
        (state, action: PayloadAction<ProductPayload>) => {
          state.status = 'succeeded';
          state.products = action.payload.products;
          state.products.forEach(element => {
            element.count = 0;
          });
        },
      )
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(
        fetchProduct.fulfilled,
        (state, action: PayloadAction<Product>) => {
          state.currentProduct = action.payload;
        },
      );
  },
});

export const {setProduct} = productsSlice.actions;

export const selectProducts = (state: RootState) => state.products.products;
export const selectCurrentProduct = (state: RootState) =>
  state.products.currentProduct;
export const selectStatus = (state: RootState) => state.products.status;
export const selectError = (state: RootState) => state.products.error;

export default productsSlice.reducer;
