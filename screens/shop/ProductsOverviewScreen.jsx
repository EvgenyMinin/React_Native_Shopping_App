import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';

const ProductsOverviewScreen = () => {
  const products = useSelector((state) => state.products.availableProducts);

  return (
    <FlatList
      keyExtractor={({ id }) => id}
      data={products}
      renderItem={({ item }) => (
        <ProductItem
          imageUrl={item.imageUrl}
          title={item.title}
          price={item.price}
          onViewDetail={() => {}}
          onAddToCart={() => {}}
        />
      )}
    />
  );
};

export default ProductsOverviewScreen;
