import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProfileScreen from '../../ui/screens/ProfileScreen';
import CartScreen from '../../ui/screens/CartScreen';
import ProductsScreen from '../../ui/screens/ProductsScreen';
import ProductDetailScreen from '../../ui/screens/ProductDetailScreen';
import AuthScreen from '../../ui/screens/AuthScreen';

const Stack = createNativeStackNavigator();

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="Auth"
        component={AuthScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function ProductsStack() {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="Products"
        component={ProductsScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{
          title: '',
          headerShadowVisible: false,
        }}
      />
    </Stack.Navigator>
  );
}

function CartStack() {
  return (
    <Stack.Navigator screenOptions={{}}>
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export {AuthStack, ProductsStack, ProfileStack, CartStack};
