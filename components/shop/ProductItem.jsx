import React from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';
import Colors from '../../contstants/Colors';

import Center from '../Center';

const ProductItem = ({ imageUrl, title, price, onViewDetail, onAddToCart }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: imageUrl }} style={styles.image} />
      <View style={styles.textWrapper}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>${price.toFixed(2)}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="View Details"
          onPress={onViewDetail}
          color={Colors.primary}
        />
        <Button title="To Cart" onPress={onAddToCart} color={Colors.primary} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
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
    height: 300,
    margin: 20,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '60%',
  },
  textWrapper: {
    alignItems: 'center',
    height: '15%',
    padding: 10,
  },
  title: {
    fontSize: 18,
    marginVertical: 4,
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    height: '25%',
  },
});

export default ProductItem;
