import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface PaymentScreenProps {}

const PaymentScreen = (props: PaymentScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>PaymentScreen</Text>
    </View>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  container: {},
});
