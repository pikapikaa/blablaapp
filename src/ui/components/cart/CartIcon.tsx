import React from 'react';
import {StyleSheet, Pressable, View, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {selectCartProducts} from '../../../services/store/reducers/cart';
import {useSelector} from 'react-redux';

interface CartIconProps {}
const SIZE = 15;

const CartIcon = (props: CartIconProps) => {
  const navigation = useNavigation();
  const products = useSelector(selectCartProducts);
  const total = products.reduce(
    (accumulator, currentValue) => accumulator + currentValue.count,
    0,
  );

  let notify;
  if (total >= 1 && total <= 9) {
    notify = (
      <View style={styles.circle}>
        <Text style={styles.text}>{total}</Text>
      </View>
    );
  } else if (total > 9) {
    notify = <View style={styles.circle}></View>;
  } else notify = null;

  return (
    <Pressable onPress={() => navigation.navigate('Cart')}>
      <View>
        <Icon name="cart" size={30} color="#01282b" />
        {notify}
      </View>
    </Pressable>
  );
};

export default CartIcon;

const styles = StyleSheet.create({
  container: {},
  circle: {
    position: 'absolute',
    width: SIZE,
    height: SIZE,
    borderRadius: SIZE / 2,
    backgroundColor: 'red',
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'white',
    fontSize: 12,
  },
});
