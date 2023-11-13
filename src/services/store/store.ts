import {configureStore} from '@reduxjs/toolkit';
import productsReducer from './reducers/products';
import cartReducer from './reducers/cart';
import authReducer from './reducers/auth';

export const store = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
