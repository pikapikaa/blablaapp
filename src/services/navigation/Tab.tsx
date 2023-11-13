import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import ProductsScreen from '../../ui/screens/ProductsScreen';
import ProfileScreen from '../../ui/screens/ProfileScreen';
import {ProductsStack, ProfileStack} from './Stack';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        // headerShown: false,
        // tabBarHideOnKeyboard: true,
      })}>
      <Tab.Screen
        name="products"
        component={ProductsStack}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="profile"
        component={ProfileStack}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;

const styles = StyleSheet.create({
  container: {},
});