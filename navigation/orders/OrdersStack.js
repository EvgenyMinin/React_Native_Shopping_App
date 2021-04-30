import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DrawerActions } from '@react-navigation/native';

import OrdersScreen from '../../screens/shop/OrdersScreen';

import CustomHeaderButton from '../../components/UI/HeaderButton';

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
          headerLeft: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Menu"
                iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
                onPress={() => {
                  navigation.dispatch(DrawerActions.toggleDrawer());
                }}
              />
            </HeaderButtons>
          ),
        })}
      />
    </OrdersStackNavigator.Navigator>
  );
};

export default OrdersStack;
