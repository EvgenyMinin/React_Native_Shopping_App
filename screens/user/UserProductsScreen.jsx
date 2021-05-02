import React from 'react';
import { Button, FlatList } from 'react-native';
import { useSelector } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';

import Colors from '../../constants/Colors';

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
          onSelect={() => {}}
        >
          <Button
            title="Edit"
            // onPress={() => selectItemHandler(item.id, item.title)}
            color={Colors.primary}
          />
          <Button
            title="Delete"
            // onPress={() => dispatch(cartAction.addToCart(item))}
            color={Colors.primary}
          />
        </ProductItem>
      )}
    />
  );
};

export default UserProductsScreen;
