import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import CustomButton from '../components/common/CustomButton';

interface AuthScreenProps {}

const AuthScreen = (props: AuthScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>AuthScreen</Text>
      <CustomButton onPress={() => {}} title="Login" />
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {},
});
