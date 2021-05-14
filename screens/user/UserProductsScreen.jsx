import React from 'react';
import { Button, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';

import Colors from '../../constants/Colors';
import * as productAction from '../../store/actions/products';

const UserProductsScreen = ({ navigation }) => {
  const userProducts = useSelector((state) => state.products.userProducts);

  const dispatch = useDispatch();

  const editProductHandler = (id) => {
    navigation.navigate('Edit Product', { productId: id });
  };

  return (
    <FlatList
      data={userProducts}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => (
        <ProductItem
          imageUrl={item.imageUrl}
          title={item.title}
          price={item.price}
          onSelect={() => editProductHandler(item.id)}
        >
          <Button
            title="Edit"
            onPress={() => editProductHandler(item.id)}
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
