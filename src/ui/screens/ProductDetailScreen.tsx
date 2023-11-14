import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CartIcon from '../components/cart/CartIcon';

interface ProductDetailScreenProps {}

const ProductDetailScreen = (props: ProductDetailScreenProps) => {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <CartIcon />,
    });
  }, [navigation]);
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
