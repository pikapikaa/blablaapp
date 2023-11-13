import * as React from 'react';
import {StyleSheet, Image} from 'react-native';
import {useProductContext} from '../../../services/contexts/ProductCardContext';

const ITEM_HEIGHT = 100;
interface UserCardImageProps {}

const ProductCardImage = (props: UserCardImageProps) => {
  const {product} = useProductContext();
  return <Image source={{uri: product.thumbnail}} style={styles.image} />;
};

export default ProductCardImage;

const styles = StyleSheet.create({
  image: {
    width: ITEM_HEIGHT - 10,
    height: ITEM_HEIGHT - 10,
  },
});
