import React, { useEffect, useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  TextInput,
  StyleSheet,
  Alert,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import SaveButton from '../../components/UI/SaveButton';

import * as productsActions from '../../store/actions/products';

const EditProductScreen = ({ navigation, route }) => {
  const { productId } = route.params;
  const editedProduct = useSelector((state) =>
    state.products.userProducts.find((prod) => prod.id === productId)
  );

  const dispatch = useDispatch();

  const [title, setTitle] = useState(editedProduct ? editedProduct.title : '');
  const [isValidTitle, setIsValidTitle] = useState(
    editedProduct ? true : false
  );
  const [imageUrl, setImageUrl] = useState(
    editedProduct ? editedProduct.imageUrl : ''
  );
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState(
    editedProduct ? editedProduct.description : ''
  );

  const onSubmit = () => {
    if (!isValidTitle) {
      Alert.alert('Wrong input!', 'Please check the errors in the form.', [
        { text: 'Okay' },
      ]);
      return;
    }
    if (editedProduct) {
      dispatch(
        productsActions.updateProduct(productId, title, description, imageUrl)
      );
    } else {
      dispatch(
        productsActions.createProduct(title, imageUrl, +price, description)
      );
    }
    navigation.goBack();
  };

  const titleChangeHandler = (text) => {
    if (text.trim().length === 0) {
      setIsValidTitle(false);
    } else {
      setIsValidTitle(true);
    }
    setTitle(text);
  };

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <SaveButton navigation={navigation} onSubmit={onSubmit} />
      ),
    });
  }, [navigation, title, imageUrl, description, price]);

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.formControl}>
          <Text style={styles.label}>Title</Text>
          <TextInput
            style={styles.input}
            value={title}
            onChangeText={titleChangeHandler}
          />
          {!isValidTitle && <Text>Please enter a valid title!</Text>}
        </View>

        <View style={styles.formControl}>
          <Text style={styles.label}>Image URL</Text>
          <TextInput
            style={styles.input}
            value={imageUrl}
            onChangeText={setImageUrl}
          />
        </View>

        {editedProduct ? null : (
          <View style={styles.formControl}>
            <Text style={styles.label}>Price</Text>
            <TextInput
              style={styles.input}
              value={price}
              onChangeText={setPrice}
              keyboardType="decimal-pad"
            />
          </View>
        )}

        <View style={styles.formControl}>
          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={setDescription}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  formControl: {
    width: '100%',
  },
  label: {
    fontFamily: 'open-sans-bold',
    marginVertical: 8,
  },
  input: {
    paddingHorizontal: 2,
    paddingVertical: 5,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
});

export default EditProductScreen;
