import React from 'react';
import { FlatList, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import ProductItem from '../../components/shop/ProductItem';

import * as cartAction from '../../store/actions/cart';

const ProductsOverviewScreen = ({ navigation }) => {
  const products = useSelector((state) => state.products.availableProducts);

  const dispatch = useDispatch();

  const handleViewDetail = (id, title) => {
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
          onViewDetail={() => handleViewDetail(item.id, item.title)}
          onAddToCart={() => dispatch(cartAction.addToCart(item))}
        />
      )}
    />
  );
};

export default ProductsOverviewScreen;
