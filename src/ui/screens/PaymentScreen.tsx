import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import TitleView from '../components/products/TitleView';
import {useAppDispatch, useAppSelector} from '../../services/hooks';
import {remove, selectCartProducts} from '../../services/store/reducers/cart';
import CustomButton from '../components/common/CustomButton';
import {useNavigation} from '@react-navigation/native';

const PaymentScreen = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();
  const products = useAppSelector(selectCartProducts);
  const total = products
    .reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * currentValue.count,
      0,
    )
    .toFixed(2);

  function pay() {
    dispatch(remove());
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'Products',
        },
      ],
    });
  }

  return (
    <View style={styles.container}>
      <TitleView>Payment</TitleView>
      <View style={styles.content}>
        <Icon name="card-outline" size={100} color="green" />
        <Text style={[styles.text, {color: 'gray'}]}>
          Total:
          <Text style={[styles.text, {color: '#01282b'}]}> ${total}</Text>
        </Text>
      </View>
      <View style={styles.footer}>
        <CustomButton title="Pay" onPress={pay} />
      </View>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 15},
  content: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 100,
    gap: 15,
  },
  text: {
    fontFamily: 'RobotoSlab-Bold',
    fontSize: 25,
  },
  footer: {flex: 1, justifyContent: 'flex-end', alignItems: 'center'},
});
