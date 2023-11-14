import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import TitleView from '../components/products/TitleView';
import {useSelector} from 'react-redux';
import {remove, selectCartProducts} from '../../services/store/reducers/cart';
import CartList from '../components/cart/CartList';
import {useAppDispatch} from '../../services/hooks';

const CartScreen = () => {
  const products = useSelector(selectCartProducts);
  const dispatch = useAppDispatch();

  let content;
  let trash;

  if (products.length) {
    content = <CartList />;
    trash = (
      <Pressable onPress={() => dispatch(remove())}>
        <Icon name="trash-outline" size={20} color="#01282b" />
      </Pressable>
    );
  } else {
    content = (
      <View style={styles.center}>
        <Text style={styles.text}>no products</Text>
      </View>
    );
    trash = null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TitleView>Checkout</TitleView>
        {trash}
      </View>
      {content}
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    gap: 20,
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  text: {
    fontFamily: 'RobotoSlab-Regular',
  },
});
