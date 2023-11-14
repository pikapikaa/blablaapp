import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useAppSelector} from '../../../services/hooks';
import {selectCurrentProduct} from '../../../services/store/reducers/products';

const ProductInfoTitle = () => {
  const product = useAppSelector(selectCurrentProduct);
  return (
    <View style={styles.container}>
      <Text style={[styles.title]}>{product?.title}</Text>
    </View>
  );
};

export default ProductInfoTitle;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: 'RobotoSlab-Bold',
  },
});
