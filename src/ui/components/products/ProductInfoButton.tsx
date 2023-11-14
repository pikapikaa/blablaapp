import React from 'react';
import {useAppDispatch, useAppSelector} from '../../../services/hooks';
import {selectCurrentProduct} from '../../../services/store/reducers/products';
import {increaseCounter} from '../../../services/store/reducers/cart';
import CustomButton from '../common/CustomButton';

const ProductInfoButton = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector(selectCurrentProduct);

  return (
    <CustomButton
      onPress={() => dispatch(increaseCounter(product))}
      title="Add to Cart"
    />
  );
};

export default ProductInfoButton;
