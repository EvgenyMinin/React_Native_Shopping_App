import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Button,
} from 'react-native';
import { useSelector } from 'react-redux';

import Colors from '../../contstants/Colors';

const ProductDetailScreen = ({ route }) => {
  const { productId } = route.params;

  const selectedProduct = useSelector((state) =>
    state.products.availableProducts.find((product) => product.id === productId)
  );

  return (
    <ScrollView>
      <Image source={{ uri: selectedProduct.imageUrl }} style={styles.image} />
      <View style={styles.buttonContainer}>
        <Button title="Add To Cart" onPress={() => {}} color={Colors.primary} />
      </View>
      <Text style={styles.price}>${selectedProduct.price.toFixed(2)}</Text>
      <Text style={styles.description}>{selectedProduct.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 300,
  },
  buttonContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  price: {
    fontSize: 20,
    color: '#888',
    textAlign: 'center',
    marginVertical: 20,
  },
  description: {
    fontSize: 14,
    textAlign: 'center',
    marginHorizontal: 20,
  },
});

export default ProductDetailScreen;
