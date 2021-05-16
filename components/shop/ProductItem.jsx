import React from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  View,
} from 'react-native';

import Card from '../UI/Card';

const ProductItem = ({ imageUrl, title, price, onSelect, children }) => {
  let TouchableCmp = TouchableOpacity;

  if (Platform.OS === 'android' && Platform.Version >= 21) {
    TouchableCmp = TouchableNativeFeedback;
  }

  return (
    <TouchableCmp onPress={onSelect} useForeground>
      <View style={styles.container}>
        <Image source={{ uri: imageUrl }} style={styles.image} />
        <View style={styles.infoContainer}>
          <View style={styles.textWrapper}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.price}>${price.toFixed(2)}</Text>
          </View>
          <View style={styles.buttonContainer}>{children}</View>
        </View>
      </View>
    </TouchableCmp>
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
  infoContainer: {
    backgroundColor: 'white',
  },
  textWrapper: {
    alignItems: 'center',
    padding: 10,
  },
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 18,
    marginVertical: 4,
  },
  price: {
    fontFamily: 'open-sans',
    fontSize: 14,
    color: '#888',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
});

export default ProductItem;
