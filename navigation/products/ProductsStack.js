import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Platform } from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import MenuButton from '../../components/UI/MenuButton';

import ProductsOverviewScreen from '../../screens/shop/ProductsOverviewScreen';
import ProductDetailScreen from '../../screens/shop/ProductDetailScreen';
import CartScreen from '../../screens/shop/CartScreen';

import CustomHeaderButton from '../../components/UI/HeaderButton';

import Colors from '../../constants/Colors';

const ProductStack = createStackNavigator();

const ProductsStack = () => {
  return (
    <ProductStack.Navigator
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
      <ProductStack.Screen
        name="All Products"
        component={ProductsOverviewScreen}
        options={({ navigation }) => ({
          headerLeft: () => <MenuButton navigation={navigation} />,
          headerRight: () => (
            <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
              <Item
                title="Cart"
                iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
                onPress={() => {
                  navigation.navigate('Cart');
                }}
              />
            </HeaderButtons>
          ),
        })}
      />
      <ProductStack.Screen
        name="Product Detail"
        component={ProductDetailScreen}
        options={({ route }) => ({
          headerTitle: route.params.title,
        })}
      />
      <ProductStack.Screen name="Cart" component={CartScreen} />
    </ProductStack.Navigator>
  );
};

export default ProductsStack;
