import React, {ReactNode} from 'react';
import {View, StyleSheet} from 'react-native';
import {Product} from '../../../domain/Product';
import CartItemContext from '../../../services/contexts/CartItemContext';

const ITEM_HEIGHT = 100;

interface CartItemProps {
  item: Product;
  counter: ReactNode;
  image: ReactNode;
  title: ReactNode;
}

const CartItem = ({item, counter, image, title}: CartItemProps) => {
  return (
    <CartItemContext.Provider value={{product: item}}>
      <View style={styles.container}>
        {image}
        {title}
        {counter}
      </View>
    </CartItemContext.Provider>
  );
};

export default CartItem;

const styles = StyleSheet.create({
  container: {
    height: ITEM_HEIGHT,
    borderRadius: 10,
    backgroundColor: 'white',
    width: '100%',
    gap: 10,
    flexDirection: 'row',
    paddingEnd: 10,
  },
});
