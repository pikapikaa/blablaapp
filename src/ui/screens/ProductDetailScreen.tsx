import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface ProductDetailScreenProps {}

const ProductDetailScreen = (props: ProductDetailScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>ProductDetailScreen</Text>
    </View>
  );
};

export default ProductDetailScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#f4f6f5'},
});
