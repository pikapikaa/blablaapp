import * as React from 'react';
import {StyleSheet, Image} from 'react-native';
import {useProductContext} from '../../../services/contexts/ProductCardContext';
import {ITEM_HEIGHT} from '../../../lib/constants';

interface UserCardImageProps {}

const ProductCardImage = (props: UserCardImageProps) => {
  const {product} = useProductContext();
  return <Image source={{uri: product.thumbnail}} style={styles.image} />;
};

export default ProductCardImage;

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '70%',
    borderRadius: 10,
  },
});
