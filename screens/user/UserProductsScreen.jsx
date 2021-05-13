import React from 'react';
import { Button, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';

import Colors from '../../constants/Colors';
import * as productAction from '../../store/actions/products';

const UserProductsScreen = () => {
  const userProducts = useSelector((state) => state.products.userProducts);

  const dispatch = useDispatch();

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
            onPress={() => dispatch(productAction.deleteProduct(item.id))}
            color={Colors.primary}
          />
        </ProductItem>
      )}
    />
  );
};

export default UserProductsScreen;
