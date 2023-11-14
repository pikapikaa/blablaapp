import React from 'react';
import {View, StyleSheet} from 'react-native';
import TitleView from '../components/products/TitleView';

const CartScreen = () => {
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
