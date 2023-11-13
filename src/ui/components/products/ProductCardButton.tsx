import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface ProductCardButtonProps {}

const ProductCardButton = (props: ProductCardButtonProps) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          width: 20,
          height: 20,
          borderRadius: 20 / 2,
          backgroundColor: 'blue',
        }}></View>
    </View>
  );
};

export default ProductCardButton;

const styles = StyleSheet.create({
  container: {alignItems: 'flex-end'},
});
