import React from 'react';
import {useAppDispatch, useAppSelector} from '../../../services/hooks';
import {selectCurrentProduct} from '../../../services/store/reducers/products';
import {increaseCounter} from '../../../services/store/reducers/cart';
import CustomButton from '../common/CustomButton';
import {Alert, Pressable, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProductInfoButton = () => {
  const dispatch = useAppDispatch();
  const product = useAppSelector(selectCurrentProduct);

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}>
      <Pressable
        onPress={() => Alert.alert('Added to Wish List!')}
        style={{alignItems: 'center', flex: 1}}>
        <View>
          <Icon name="heart-outline" size={30} color="black" />
        </View>
      </Pressable>

      <CustomButton
        onPress={() => dispatch(increaseCounter(product))}
        title="Add to Cart"
        style={{margin: 10}}
      />
    </View>
  );
};

export default ProductInfoButton;
