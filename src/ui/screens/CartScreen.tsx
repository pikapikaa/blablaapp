import React from 'react';
import {View, StyleSheet, Text, Pressable, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import TitleView from '../components/products/TitleView';
import {useSelector} from 'react-redux';
import {remove, selectCartProducts} from '../../services/store/reducers/cart';
import CartList from '../components/cart/CartList';
import {useAppDispatch} from '../../services/hooks';
import CustomButton from '../components/common/CustomButton';

const {width} = Dimensions.get('window');

const CartScreen = () => {
  const products = useSelector(selectCartProducts);
  const dispatch = useAppDispatch();

  let content;
  let trash;
  let button;

  if (products.length) {
    content = <CartList />;
    trash = (
      <Pressable onPress={() => dispatch(remove())}>
        <Icon name="trash-outline" size={20} color="#01282b" />
      </Pressable>
    );
    button = (
      <View style={styles.button}>
        <CustomButton title="Buy" onPress={() => {}} />
      </View>
    );
  } else {
    content = (
      <View style={styles.center}>
        <Text style={styles.text}>no products</Text>
      </View>
    );
    trash = null;
    button = null;
  }
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TitleView>Checkout</TitleView>
        {trash}
      </View>
      {content}
      {button}
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
  button: {
    marginBottom: 10,
    position: 'absolute',
    bottom: 0,
    left: width / 2 - (width - 100) / 2,
  },
});
