import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';

import MenuButton from '../../components/UI/MenuButton';
import SaveButton from '../../components/UI/SaveButton';
import CreateButton from '../../components/UI/CreateButton';

import UserProductsScreen from '../../screens/user/UserProductsScreen';

import Colors from '../../constants/Colors';
import EditProductScreen from '../../screens/user/EditProductScreen';

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
          headerRight: () => <CreateButton navigation={navigation} />,
        })}
      />

      <AdminStackNavigator.Screen
        name="Edit Product"
        component={EditProductScreen}
        options={({ route }) => ({
          headerTitle: route.params.productId ? 'Edit Product' : 'Add Product',
        })}
      />
    </AdminStackNavigator.Navigator>
  );
};

export default AdminStack;
