import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useProductContext} from '../../../services/contexts/ProductCardContext';

const ProductCardTitle = () => {
  const {product} = useProductContext();

  return (
    <View style={styles.container}>
      <Text numberOfLines={1} style={[styles.title]}>
        {product.title}
      </Text>
      <Text style={[styles.subtitle]}>${product.price}</Text>
    </View>
  );
};

export default ProductCardTitle;

const styles = StyleSheet.create({
  container: {flex: 1, gap: 3},
  title: {
    fontSize: 14,
    fontFamily: 'RobotoSlab-Regular',
    color: '#01282b',
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'RobotoSlab-Bold',
    color: '#01282b',
  },
});
