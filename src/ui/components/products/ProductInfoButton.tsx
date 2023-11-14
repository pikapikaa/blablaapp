import React from 'react';
import {useAppDispatch, useAppSelector} from '../../../services/hooks';
import {selectCurrentProduct} from '../../../services/store/reducers/products';
import {increaseCounter} from '../../../services/store/reducers/cart';
import CustomButton from '../common/CustomButton';
import {View} from 'react-native';

const ProductInfoButton = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector(selectCurrentProduct);

  return (
    <View style={{alignItems: 'flex-end'}}>
      <CustomButton
        onPress={() => dispatch(increaseCounter(product))}
        title="Add to Cart"
        style={{margin: 10}}
      />
    </View>
  );
};

export default ProductInfoButton;
