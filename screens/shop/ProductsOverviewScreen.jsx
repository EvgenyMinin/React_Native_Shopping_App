import React from "react";
import { FlatList, Text } from "react-native";
import { useSelector } from "react-redux";
import Center from "../../components/Center";

const ProductsOverviewScreen = () => {
  const products = useSelector((state) => state.products.availableProducts);

  return (
    <FlatList
      keyExtractor={({ id }) => id}
      data={products}
      renderItem={({ item }) => <Text>{item.title}</Text>}
    />
  );
};

export default ProductsOverviewScreen;
