import React from 'react';
import {View, StyleSheet} from 'react-native';
import TitleView from '../components/products/TitleView';
import {useSelector} from 'react-redux';
import {selectCartProducts} from '../../services/store/reducers/cart';

const CartScreen = () => {
  const products = useSelector(selectCartProducts);
  return (
    <View style={styles.container}>
      <TitleView>Checkout</TitleView>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
});
