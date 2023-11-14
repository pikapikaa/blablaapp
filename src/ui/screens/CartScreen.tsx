import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import TitleView from '../components/products/TitleView';

interface CartScreenProps {}

const CartScreen = (props: CartScreenProps) => {
  return (
    <View style={styles.container}>
      <TitleView>Checkout</TitleView>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {},
});
