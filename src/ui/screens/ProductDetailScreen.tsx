import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {View, ScrollView, RefreshControl} from 'react-native';
import CartIcon from '../components/cart/CartIcon';
import {useAppDispatch, useAppSelector} from '../../services/hooks';
import ProductInfo from '../components/products/ProductInfo';
import {
  fetchProduct,
  selectCurrentProduct,
} from '../../services/store/reducers/products';
import ProductInfoButton from '../components/products/ProductInfoButton';

const ProductDetailScreen = () => {
  const [refreshing, setRefreshing] = useState(false);

  const dispatch = useAppDispatch();
  const product = useAppSelector(selectCurrentProduct);
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <CartIcon />,
    });
  }, [navigation]);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);
    await dispatch(fetchProduct(`/${product?.id}`));
    setRefreshing(false);
  }, []);

  return (
    <View style={{flex: 1}}>
      <ScrollView
        style={{flex: 1}}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }>
        <ProductInfo
          image={<ProductInfo.Image />}
          title={<ProductInfo.Title />}
          details={<ProductInfo.Details />}
        />
      </ScrollView>
      <ProductInfoButton />
    </View>
  );
};

export default ProductDetailScreen;
