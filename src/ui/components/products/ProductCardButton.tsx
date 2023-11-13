import React from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface ProductCardButtonProps {}

const ProductCardButton = (props: ProductCardButtonProps) => {
  return (
    <View style={styles.container}>
      <Icon name="add-circle-sharp" size={25} color="#4E67BF" />
    </View>
  );
};

export default ProductCardButton;

const styles = StyleSheet.create({
  container: {alignItems: 'flex-end'},
});
