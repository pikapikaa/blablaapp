import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

import TabNavigation from './Tab';
import {AuthStack} from './Stack';
import {useSelector} from 'react-redux';
import {selectAuth} from '../store/reducers/auth';
import {StyleSheet} from 'react-native';

function Navigation() {
  const isAuthorized = useSelector(selectAuth);
  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <NavigationContainer>
        {isAuthorized ? <TabNavigation /> : <AuthStack />}
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#f4f6f5'},
});

export default Navigation;
