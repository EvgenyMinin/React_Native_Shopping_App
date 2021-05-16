import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import CustomHeaderButton from './HeaderButton';

const SaveButton = ({ onSubmit }) => {
  return (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Save"
        iconName={Platform.OS === 'android' ? 'md-checkmark' : 'ios-checkmark'}
        onPress={onSubmit}
      />
    </HeaderButtons>
  );
};

export default SaveButton;
