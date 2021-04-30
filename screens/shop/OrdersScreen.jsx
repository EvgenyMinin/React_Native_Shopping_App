import React from 'react';
import { FlatList, Text } from 'react-native';
import { useSelector } from 'react-redux';
import OrderItem from '../../components/shop/OrderItem';

const OrdersScreen = () => {
  const orders = useSelector((state) => state.orders.orders);

  return (
    <FlatList
      data={orders}
      keyExtractor={({ id }) => id}
      renderItem={({ item }) => (
        <OrderItem amount={item.totalAmount} date={item.readableDate} />
      )}
    />
  );
};

export default OrdersScreen;
