import {createContext, useContext} from 'react';
import {Product} from '../../domain/Product';

const CartItemContext = createContext<{product: Product} | null>(null);

export function useCartContext() {
  const context = useContext(CartItemContext);
  if (!context) {
    throw new Error(
      'CartItem.* component must be rendered as child of CartItem component!',
    );
  }
  return context;
}

export default CartItemContext;
