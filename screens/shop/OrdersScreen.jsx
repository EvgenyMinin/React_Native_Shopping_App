import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';

const OrdersScreen = () => {
  const orders = useSelector((state) => state.orders.orders);

  return (
    <FlatList
      data={orders}
      keyExtractor={({ id }) => id}
      renderItem={(itemData) => <Text>{itemData.item.totalAmount}</Text>}
    />
  );
};

export default OrdersScreen;
