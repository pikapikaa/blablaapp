import React, {ReactNode} from 'react';
import {View, StyleSheet} from 'react-native';
import ProductInfoImage from './ProductInfoImage';
import ProductInfoTitle from './ProductInfoTitle';
import ProductInfoDetails from './ProductInfoDetails';

type ProductInfoProps = {
  image?: ReactNode;
  title?: ReactNode;
  details?: ReactNode;
};

const ProductInfo = ({image, title, details}: ProductInfoProps) => {
  return (
    <View style={styles.container}>
      {image}
      {title}
      {details}
    </View>
  );
};

ProductInfo.Image = ProductInfoImage;
ProductInfo.Title = ProductInfoTitle;
ProductInfo.Details = ProductInfoDetails;

export default ProductInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    paddingBottom: 0,
    gap: 40,
  },
});
