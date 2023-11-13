import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {useProductContext} from '../../../services/contexts/ProductCardContext';

interface UserCardTitleProps {}

const ProductCardTitle = (props: UserCardTitleProps) => {
  const {product} = useProductContext();

  return (
    <View style={styles.container}>
      <Text style={[styles.title]}>
        {product.title} {product.brand}
      </Text>
      <Text numberOfLines={2} style={[styles.subtitle]}>
        {product.price}
      </Text>
    </View>
  );
};

export default ProductCardTitle;

const styles = StyleSheet.create({
  container: {flex: 1, paddingEnd: 5},
  title: {
    fontSize: 18,
  },
  subtitle: {
    fontSize: 14,
  },
});
