import React from 'react';
import {StyleSheet, Image} from 'react-native';
import {useCartContext} from '../../../services/contexts/CartItemContext';

const CartItemImage = () => {
  const {product} = useCartContext();
  return <Image source={{uri: product.thumbnail}} style={styles.image} />;
};

export default CartItemImage;

const styles = StyleSheet.create({
  image: {
    width: '30%',
    borderRadius: 10,
  },
});
