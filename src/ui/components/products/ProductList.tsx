import React, {useCallback, useMemo, useState} from 'react';
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
import SearchView from '../common/SearchView';

const limit = 100;

const ProductList = () => {
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();
  const dispatch = useAppDispatch();

  const data = useSelector(selectProducts);
  const status = useSelector(selectStatus);

  const filteredData = useMemo(
    () =>
      data.filter(pr =>
        pr.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()),
      ),
    [searchText, data],
  );

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

  const onChange = (text: string) => {
    setSearchText(text);
  };

  return (
    <>
      <SearchView onChange={onChange} />
      <FlatList
        data={filteredData}
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
    </>
  );
};

const style = StyleSheet.create({
  row: {
    justifyContent: 'space-between',
  },
});

export default ProductList;
