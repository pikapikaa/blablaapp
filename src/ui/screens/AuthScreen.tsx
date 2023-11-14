import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import CustomButton from '../components/common/CustomButton';
import {useAppDispatch, useAppSelector} from '../../services/hooks';
import {fetchUsers} from '../../services/store/reducers/auth';

const {height} = Dimensions.get('window');

const AuthScreen = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(state => state.auth.status);

  let btnContent = (
    <CustomButton
      onPress={() => dispatch(fetchUsers(`?skip=0&limit=3`))}
      title="Login"
    />
  );

  if (status === 'loading') {
    btnContent = <ActivityIndicator color={'#01282b'} />;
  }

  return (
    <View style={styles.container}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.title}>Welcome!</Text>
        <Text style={styles.title}>It's Awesome 🖐.</Text>
      </View>

      <Icon name="logo-electron" size={100} color="#01282b" />
      {btnContent}
    </View>
  );
};

export default AuthScreen;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', gap: 40, paddingTop: height / 5},
  title: {fontFamily: 'RobotoSlab-Bold', fontSize: 30, color: '#01282b'},
});
