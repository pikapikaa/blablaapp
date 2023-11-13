import React, {memo, ReactNode} from 'react';
import {View, StyleSheet, Pressable, Dimensions} from 'react-native';
import {Product} from '../../../domain/Product';
import ProductCardContext from '../../../services/contexts/ProductCardContext';
import {ITEM_HEIGHT} from '../../../lib/constants';

const {width} = Dimensions.get('window');

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
    backgroundColor: 'white',
    width: width / 2 - 30,
    paddingHorizontal: 18,
    paddingTop: 18,
    gap: 10,
  },
});
