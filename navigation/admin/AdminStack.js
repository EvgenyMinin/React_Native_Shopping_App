import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';

import MenuButton from '../../components/UI/MenuButton';

import UserProductsScreen from '../../screens/user/UserProductsScreen';

import Colors from '../../constants/Colors';

const AdminStackNavigator = createStackNavigator();

const AdminStack = () => {
  return (
    <AdminStackNavigator.Navigator
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
      <AdminStackNavigator.Screen
        name="Your Orders"
        component={UserProductsScreen}
        options={({ navigation }) => ({
          headerLeft: () => <MenuButton navigation={navigation} />,
        })}
      />
    </AdminStackNavigator.Navigator>
  );
};

export default AdminStack;
