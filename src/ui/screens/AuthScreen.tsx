import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';

interface AuthScreenProps {}

const AuthScreen = (props: AuthScreenProps) => {
  return (
    <View style={styles.container}>
      <Text>AuthScreen</Text>
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {},
});
