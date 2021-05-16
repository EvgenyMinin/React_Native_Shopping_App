import React, { useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

import CartItem from './CartItem';

import Colors from '../../constants/Colors';
import Card from '../UI/Card';

const OrderItem = ({ amount, date, items }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <Card style={styles.container}>
      <View style={styles.summary}>
        <Text style={styles.totalAmount}>${amount.toFixed(2)}</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <Button
        title={showDetails ? 'Hide Details' : 'Show Details'}
        color={Colors.primary}
        onPress={() => setShowDetails((prevState) => !prevState)}
      />
      {showDetails && (
        <View style={styles.detailsContainer}>
          {items.map((cartItem) => (
            <CartItem
              key={cartItem.productId}
              quantity={cartItem.quantity}
              title={cartItem.productTitle}
              amount={cartItem.sum}
            />
          ))}
        </View>
      )}
    </Card>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 10,
    alignItems: 'center',
  },
  summary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 16,
  },
  totalAmount: {
    fontFamily: 'open-sans-bold',
    fontSize: 16,
  },
  date: {
    fontFamily: 'open-sans',
    fontSize: 16,
    color: '#888',
  },
  detailsContainer: {
    width: '100%',
  },
});

export default OrderItem;
