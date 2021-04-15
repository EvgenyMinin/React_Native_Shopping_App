import React from 'react';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import ProductsStack from './navigation/products/ProductsStack';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
});

const store = createStore(rootReducer);

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
      <ProductsStack />
    </Provider>
  );
}
