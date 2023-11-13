import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface ProductsScreenProps {}

const ProductsScreen = (props: ProductsScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>ProductsScreen</Text>
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {},
});
