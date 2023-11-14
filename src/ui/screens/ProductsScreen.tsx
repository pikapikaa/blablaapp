import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import {useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/Ionicons';

import {useAppDispatch} from '../../services/hooks';
import {
  fetchProducts,
  selectError,
  selectStatus,
} from '../../services/store/reducers/products';
import KeyboardAvoidingComponent from '../components/common/KeyboardAvoidingComponent';
import ProductList from '../components/products/ProductList';
import TitleView from '../components/products/TitleView';
import {useNavigation} from '@react-navigation/native';

const limit = 100;

const ProductsScreen = () => {
  const dispatch = useAppDispatch();
  const navigation = useNavigation();
  const [isFirstLoading, setIsFirstLoading] = useState(false);
  const status = useSelector(selectStatus);
  const error = useSelector(selectError);

  useEffect(() => {
    async function loadProducts() {
      setIsFirstLoading(true);
      await dispatch(fetchProducts(`?skip=0&limit=${limit}`));
      setIsFirstLoading(false);
    }
    if (status === 'idle') {
      loadProducts();
    }
  }, [status, dispatch]);

  const [count, setCount] = useState(0);
  console.log(count);

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Pressable onPress={() => navigation.navigate('Cart')}>
          <Icon name="cart" size={25} color="#01282b" />
        </Pressable>
      ),
    });
  }, [navigation]);

  let content;
  if (isFirstLoading) {
    content = (
      <View style={styles.center}>
        <ActivityIndicator size={'large'} color={'red'} />
      </View>
    );
  } else if (status === 'failed') {
    content = (
      <View style={styles.center}>
        <Text>{error}</Text>
      </View>
    );
  } else {
    content = <ProductList />;
  }

  return (
    <KeyboardAvoidingComponent>
      <View style={styles.container}>
        <TitleView>All Products</TitleView>
        {content}
      </View>
    </KeyboardAvoidingComponent>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingBottom: 0,
    gap: 10,
    backgroundColor: '#f4f6f5',
  },
  center: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
