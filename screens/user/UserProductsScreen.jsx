import React from 'react';
import { FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';

const UserProductsScreen = () => {
  const userProducts = useSelector((state) => state.products.userProducts);

  return (
    <FlatList
      data={userProducts}
      keyExtractor={({ id }) => id}
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

export default UserProductsScreen;
