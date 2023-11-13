import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {SafeAreaView} from 'react-native';
import TabNavigation from './Tab';
import {AuthStack} from './Stack';
import {useSelector} from 'react-redux';
import {selectAuth} from '../store/reducers/auth';

function Navigation() {
  const isAuthorized = useSelector(selectAuth);
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        {isAuthorized ? <TabNavigation /> : <AuthStack />}
      </NavigationContainer>
    </SafeAreaView>
  );
}

export default Navigation;
