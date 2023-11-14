import React from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {useProductContext} from '../../../services/contexts/ProductCardContext';
import {useAppDispatch} from '../../../services/hooks';
import {increaseCounter} from '../../../services/store/reducers/cart';

const ProductCardButton = () => {
  const {product} = useProductContext();
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          dispatch(increaseCounter(product));
        }}>
        <Icon name="add-circle-sharp" size={25} color="#bcea70" />
      </Pressable>
    </View>
  );
};

export default ProductCardButton;

const styles = StyleSheet.create({
  container: {alignItems: 'flex-end'},
});
