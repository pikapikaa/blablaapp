import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useCartContext} from '../../../services/contexts/CartItemContext';

const CartItemTitle = () => {
  const {product} = useCartContext();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.subtitle}>${product.price}</Text>
    </View>
  );
};

export default CartItemTitle;

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  title: {
    fontSize: 15,
    fontFamily: 'RobotoSlab-Regular',
    color: '#01282b',
  },
  subtitle: {
    fontSize: 17,
    fontFamily: 'RobotoSlab-Bold',
    color: '#01282b',
  },
});
