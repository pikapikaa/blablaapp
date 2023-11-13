import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {Text, View, StyleSheet, Platform} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import ProductsScreen from '../../ui/screens/ProductsScreen';
import ProfileScreen from '../../ui/screens/ProfileScreen';
import {ProductsStack, ProfileStack} from './Stack';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarLabelStyle: {
          fontFamily: 'RobotoSlab-Medium',
          color: 'black',
        },
        tabBarIcon: ({focused, size}) => {
          let iconName;
          if (route.name === 'products') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'profile') {
            iconName = focused ? 'settings' : 'settings-outline';
          }
          return <Icon name={iconName} size={size} color="black" />;
        },
        tabBarStyle: {
          borderTopWidth: Platform.OS === 'android' ? 0 : 0.2,
        },
        tabBarHideOnKeyboard: true,
      })}>
      <Tab.Screen
        name="products"
        component={ProductsStack}
        options={{title: 'Main'}}
      />
      <Tab.Screen
        name="profile"
        component={ProfileStack}
        options={{title: 'Profile'}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  container: {},
});
