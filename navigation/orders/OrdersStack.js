import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';

import MenuButton from '../../components/UI/MenuButton';

import OrdersScreen from '../../screens/shop/OrdersScreen';

import Colors from '../../constants/Colors';

const OrdersStackNavigator = createStackNavigator();

const OrdersStack = () => {
  return (
    <OrdersStackNavigator.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: Platform.OS === 'android' ? Colors.primary : 'white',
        },
        headerTitleStyle: {
          fontFamily: 'open-sans-bold',
        },
        headerBackTitleStyle: {
          fontFamily: 'open-sans',
        },
        headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
      }}
    >
      <OrdersStackNavigator.Screen
        name="Your Orders"
        component={OrdersScreen}
        options={({ navigation }) => ({
          headerLeft: () => <MenuButton navigation={navigation} />,
        })}
      />
    </OrdersStackNavigator.Navigator>
  );
};

export default OrdersStack;
