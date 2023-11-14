import React, {useCallback} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

import {useAppDispatch} from '../../../services/hooks';
import {
  selectProducts,
  selectStatus,
  setProduct,
} from '../../../services/store/reducers/products';
import {useSelector} from 'react-redux';
import {fetchProducts} from '../../../services/store/reducers/products';
import {Product} from '../../../domain/Product';
import ProductCard from './ProductCard';
import ProductCardTitle from './ProductCardTitle';
import ProductCardImage from './ProductCardImage';
import {ITEM_HEIGHT} from '../../../lib/constants';
import ProductCardButton from './ProductCardButton';
import {useNavigation} from '@react-navigation/native';

const limit = 100;

const ProductList = () => {
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const data = useSelector(selectProducts);
  const status = useSelector(selectStatus);

  const renderItem = useCallback(
    ({item}: {item: Product}) => {
      return (
        <ProductCard
          item={item}
          onPress={navigateToDetail}
          image={<ProductCardImage />}
          title={<ProductCardTitle />}
          button={<ProductCardButton />}
        />
      );
    },
    [data],
  );

  function navigateToDetail(product: Product) {
    dispatch(setProduct(product));
    navigation.navigate('ProductDetail');
  }

  const onPullToRefresh = () => {
    dispatch(fetchProducts(`?skip=0&limit=${limit}`));
  };

  return (
    <FlatList
      data={data}
      numColumns={2}
      columnWrapperStyle={style.row}
      renderItem={renderItem}
      keyExtractor={item => `${item.id}`}
      ItemSeparatorComponent={() => <View style={{height: 20}}></View>}
      getItemLayout={(data, index) => ({
        length: ITEM_HEIGHT,
        offset: (ITEM_HEIGHT + 20) * index,
        index,
      })}
      refreshing={status === 'loading'}
      onRefresh={onPullToRefresh}
    />
  );
};

const style = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
  },
});

export default ProductList;
