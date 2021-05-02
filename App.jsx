import React from 'react';
import { createStore, combineReducers } from 'redux';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Ionicons } from '@expo/vector-icons';

import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import ordersReducer from './store/reducers/orders';

import ProductsStack from './navigation/products/ProductsStack';
import OrdersStack from './navigation/orders/OrdersStack';
import AdminStack from './navigation/admin/AdminStack';

import Colors from './constants/Colors';
import { Platform } from 'react-native';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

const Drawer = createDrawerNavigator();

export default function App() {
  const [fontLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });

  if (!fontLoaded) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Products"
          drawerContentOptions={{
            activeTintColor: Colors.primary,
            labelStyle: { fontFamily: 'open-sans' },
          }}
        >
          <Drawer.Screen
            name="Products"
            component={ProductsStack}
            options={{
              drawerIcon: ({ focused }) => (
                <Ionicons
                  name={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                  size={23}
                  color={focused ? Colors.primary : '#ccc'}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Orders"
            component={OrdersStack}
            options={{
              drawerIcon: ({ focused }) => (
                <Ionicons
                  name={Platform.OS === 'android' ? 'md-list' : 'ios-list'}
                  size={23}
                  color={focused ? Colors.primary : '#ccc'}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Admin"
            component={AdminStack}
            options={{
              drawerIcon: ({ focused }) => (
                <Ionicons
                  name={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
                  size={23}
                  color={focused ? Colors.primary : '#ccc'}
                />
              ),
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
