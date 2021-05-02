import React from 'react';
import { Button, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';

import * as cartAction from '../../store/actions/cart';

import Colors from '../../constants/Colors';

const ProductsOverviewScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.availableProducts);

  const dispatch = useDispatch();

  const selectItemHandler = (id, title) => {
    navigation.navigate('Product Detail', {
      productId: id,
      title,
    });
  };

  return (
    <FlatList
      keyExtractor={({ id }) => id}
      data={products}
      renderItem={({ item }) => (
        <ProductItem
          imageUrl={item.imageUrl}
          title={item.title}
          price={item.price}
          onSelect={() => selectItemHandler(item.id, item.title)}
        >
          <Button
            title="View Details"
            onPress={() => selectItemHandler(item.id, item.title)}
            color={Colors.primary}
          />
          <Button
            title="To Cart"
            onPress={() => dispatch(cartAction.addToCart(item))}
            color={Colors.primary}
          />
        </ProductItem>
      )}
    />
  );
};

export default ProductsOverviewScreen;
