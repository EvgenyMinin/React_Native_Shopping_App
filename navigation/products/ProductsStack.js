import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';

import ProductsOverviewScreen from '../../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../../screens/shop/ProductDetailScreen';

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
          headerTitleStyle: {
            fontFamily: 'open-sans-bold',
          },
          headerBackTitleStyle: {
            fontFamily: 'open-sans',
          },
          headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary,
        }}
      >
        <ProductStack.Screen
          name="All Products"
          component={ProductsOverviewScreen}
        />
        <ProductStack.Screen
          name="Product Detail"
          component={ProductDetailScreen}
          options={({ route }) => ({
            headerTitle: route.params.title,
          })}
        />
      </ProductStack.Navigator>
    </NavigationContainer>
  );
};

export default ProductsStack;
