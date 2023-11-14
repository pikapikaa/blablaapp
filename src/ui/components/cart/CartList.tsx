import React, {useCallback} from 'react';
import {View, FlatList} from 'react-native';
import {useSelector} from 'react-redux';
import {selectCartProducts} from '../../../services/store/reducers/cart';
import {Product} from '../../../domain/Product';
import CartItem from './CartItem';
import CartItemCounter from './CartItemCounter';
import CartItemImage from './CartItemImage';
import CartItemTitle from './CartItemTitle';

const ITEM_HEIGHT = 100;

const CartList = () => {
  const products = useSelector(selectCartProducts);

  const renderItem = useCallback(
    ({item}: {item: Product}) => {
      return (
        <CartItem
          item={item}
          image={<CartItemImage />}
          counter={<CartItemCounter />}
          title={<CartItemTitle />}
        />
      );
    },
    [products],
  );
  return (
    <FlatList
      data={products}
      renderItem={renderItem}
      keyExtractor={item => `${item.id}`}
      ItemSeparatorComponent={() => <View style={{height: 20}}></View>}
      getItemLayout={(data, index) => ({
        length: ITEM_HEIGHT,
        offset: (ITEM_HEIGHT + 20) * index,
        index,
      })}
    />
  );
};

export default CartList;
