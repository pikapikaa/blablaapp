import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useAppSelector} from '../../../services/hooks';
import {selectCurrentProduct} from '../../../services/store/reducers/products';

const ProductInfoDetails = () => {
  const product = useAppSelector(selectCurrentProduct);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{product?.description}</Text>
    </View>
  );
};

export default ProductInfoDetails;

const styles = StyleSheet.create({
  container: {},
  text: {fontSize: 20, fontFamily: 'RobotoSlab-Thin'},
});
