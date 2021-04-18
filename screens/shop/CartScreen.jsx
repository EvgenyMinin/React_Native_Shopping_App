import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import CartItem from '../../components/shop/CartItem';

import Colors from '../../contstants/Colors';
import * as cartActions from '../../store/actions/cart';

const CartScreen = () => {
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const cartItems = useSelector((state) => {
    const transformedCartItems = [];
    for (const key in state.cart.items) {
      transformedCartItems.push({
        productId: key,
        quantity: state.cart.items[key].quantity,
        productPrice: state.cart.items[key].productPrice,
        productTitle: state.cart.items[key].productTitle,
        sum: state.cart.items[key].sum,
      });
    }
    return transformedCartItems;
  });
  
  const dispatch = useDispatch();
  
  const handleRemoveCartItem = (id) => {
    dispatch(cartActions.removeFromCart(id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.summary}>
        <Text style={styles.summaryText}>
          Total:&nbsp;
          <Text style={styles.amount}>${cartTotalAmount.toFixed(2)}</Text>
        </Text>
        <Button
          title="Order Now"
          color={Colors.primary}
          disabled={cartItems.length === 0}
        />
      </View>

      <FlatList
        keyExtractor={({ productId }) => productId}
        data={cartItems}
        renderItem={({ item }) => (
          <CartItem
            quantity={item.quantity}
            title={item.productTitle}
            amount={item.sum}
            onRemove={() => handleRemoveCartItem(item.productId)}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 16,
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    shadowColor: 'black',
    shadowOpacity: 0.26,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    elevation: 5,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  summaryText: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
  },
  amount: {
    color: Colors.primary,
  },
});

export default CartScreen;
