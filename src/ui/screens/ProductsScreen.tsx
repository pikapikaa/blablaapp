import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, ActivityIndicator} from 'react-native';
import {useSelector} from 'react-redux';

import {useAppDispatch} from '../../services/hooks';
import {
  fetchProducts,
  selectError,
  selectStatus,
} from '../../services/store/reducers/products';
import KeyboardAvoidingComponent from '../components/common/KeyboardAvoidingComponent';
import ProductList from '../components/products/ProductList';

const limit = 100;

const ProductsScreen = () => {
  const dispatch = useAppDispatch();
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
        <Text
          style={{color: 'black', fontSize: 30, fontFamily: 'RobotoSlab-Bold'}}>
          All Users
        </Text>
        {content}
      </View>
    </KeyboardAvoidingComponent>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingBottom: 0,
    gap: 20,
  },
  center: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});
