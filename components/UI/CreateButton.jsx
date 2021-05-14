import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from './HeaderButton';

const CreateButton = ({ navigation }) => {
  return (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Menu"
        iconName={Platform.OS === 'android' ? 'md-create' : 'ios-create'}
        onPress={() => {
          navigation.navigate('Edit Product', {});
        }}
      />
    </HeaderButtons>
  );
};

export default CreateButton;
