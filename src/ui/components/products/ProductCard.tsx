import React, {memo, ReactNode} from 'react';
import {View, StyleSheet, Pressable} from 'react-native';
import {Product} from '../../../domain/Product';
import ProductCardContext from '../../../services/contexts/ProductCardContext';

const ITEM_HEIGHT = 100;

interface ProductCardProps {
  item: Product;
  onPress: (product: Product) => void;
  image: ReactNode;
  title: ReactNode;
}

const ProductCard = memo(({item, onPress, image, title}: ProductCardProps) => {
  return (
    <ProductCardContext.Provider value={{product: item}}>
      <Pressable onPress={() => onPress(item)}>
        <View style={[styles.container]}>
          {image}
          {title}
        </View>
      </Pressable>
    </ProductCardContext.Provider>
  );
});

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    height: ITEM_HEIGHT,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
