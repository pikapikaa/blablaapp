import React from 'react';
import {Text, View, StyleSheet, Pressable} from 'react-native';
import {useCartContext} from '../../../services/contexts/CartItemContext';
import Icon from 'react-native-vector-icons/Ionicons';
import {useAppDispatch} from '../../../services/hooks';
import {
  decreaseCounter,
  increaseCounter,
} from '../../../services/store/reducers/cart';

const CartItemCounter = () => {
  const {product} = useCartContext();
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Pressable onPress={() => dispatch(increaseCounter(product))}>
        <Icon name="add" size={18} color="gray" />
      </Pressable>

      <Text style={styles.text}>{product.count}</Text>
      <Pressable onPress={() => dispatch(decreaseCounter(product))}>
        <Icon name="remove-outline" size={18} color="gray" />
      </Pressable>
    </View>
  );
};

export default CartItemCounter;

const styles = StyleSheet.create({
  container: {justifyContent: 'center', alignItems: 'center', gap: 10},
  text: {fontFamily: 'RobotoSlab-Medium'},
});
