import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {logout, selectUser} from '../../services/store/reducers/auth';
import CustomButton from '../components/common/CustomButton';
import {useAppDispatch, useAppSelector} from '../../services/hooks';

const ProfileScreen = () => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <Image source={{uri: user?.image}} style={styles.image} />
      <Text style={styles.title}>
        {user?.lastName} {user?.firstName}
      </Text>

      <View style={styles.bio}>
        <Text style={styles.text}>Email: {user?.email}</Text>
        <Text style={styles.text}>Birth Date {user?.birthDate}</Text>
        <Text style={styles.text}>Phone: {user?.phone}</Text>
      </View>

      <View style={styles.footer}>
        <CustomButton title="Sign Out" onPress={() => dispatch(logout())} />
      </View>
    </View>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {flex: 1, padding: 15, alignItems: 'center', gap: 20},
  image: {
    width: 150,
    height: 150,
  },
  title: {
    fontFamily: 'RobotoSlab-Bold',
    fontSize: 20,
    color: '#01282b',
  },
  bio: {
    gap: 5,
  },
  text: {
    fontFamily: 'RobotoSlab-Thin',
  },
  footer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
