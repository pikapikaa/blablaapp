import React from 'react';
import {View, StyleSheet, Text, Pressable} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../services/hooks';
import {selectCurrentProduct} from '../../../services/store/reducers/products';
import {increaseCounter} from '../../../services/store/reducers/cart';

const ProductInfoButton = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector(selectCurrentProduct);

  return (
    <Pressable onPress={() => dispatch(increaseCounter(product))}>
      <View style={styles.container}>
        <View style={styles.button}>
          <Text style={styles.text}>Add to Cart</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default ProductInfoButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    margin: 10,
  },
  button: {
    height: 50,
    width: '80%',
    backgroundColor: '#bcea70',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontFamily: 'RobotoSlab-Medium',
  },
});
