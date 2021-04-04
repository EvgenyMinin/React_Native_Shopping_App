import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';

import ProductsOverviewScreen from '../../screens/shop/ProductsOverviewScreen';

import Colors from '../../contstants/Colors';

const ProductStack = createStackNavigator();

const ProductsStack = () => {
  return (
    <NavigationContainer>
      <ProductStack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor:
              Platform.OS === 'android' ? Colors.primary : 'white',
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
        }}
      >
        <ProductStack.Screen
          name="All Products"
          component={ProductsOverviewScreen}
        />
      </ProductStack.Navigator>
    </NavigationContainer>
  );
};

export default ProductsStack;
