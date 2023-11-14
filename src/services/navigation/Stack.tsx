import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/Ionicons';

import ProfileScreen from '../../ui/screens/ProfileScreen';
import CartScreen from '../../ui/screens/CartScreen';
import ProductsScreen from '../../ui/screens/ProductsScreen';
import ProductDetailScreen from '../../ui/screens/ProductDetailScreen';
import AuthScreen from '../../ui/screens/AuthScreen';
import PaymentScreen from '../../ui/screens/PaymentScreen';

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
    <Stack.Navigator
      screenOptions={{
        title: '',
        headerShadowVisible: false,
        headerStyle: {backgroundColor: '#f4f6f5'},
      }}>
      <Stack.Screen name="Products" component={ProductsScreen} />
      <Stack.Screen name="ProductDetail" component={ProductDetailScreen} />
      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{
          title: '',
          headerShadowVisible: false,
          headerStyle: {backgroundColor: '#f4f6f5'},
          headerRight: undefined,
        }}
      />
      <Stack.Screen name="Payment" component={PaymentScreen} />
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

export {AuthStack, ProductsStack, ProfileStack};
