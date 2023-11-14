import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {useAppSelector} from '../../../services/hooks';
import {selectCurrentProduct} from '../../../services/store/reducers/products';

const SIZE = 150;

const ProductInfoImage = () => {
  const product = useAppSelector(selectCurrentProduct);
  return (
    <View style={styles.container}>
      <Image source={{uri: product?.thumbnail}} style={styles.image} />
    </View>
  );
};

export default ProductInfoImage;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  image: {
    width: SIZE,
    height: SIZE,
    borderRadius: 10,
  },
});
