import React from 'react';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { DrawerActions } from '@react-navigation/native';

import CustomHeaderButton from './HeaderButton';

const MenuButton = ({ navigation }) => {
  return (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Menu"
        iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
        onPress={() => {
          navigation.dispatch(DrawerActions.toggleDrawer());
        }}
      />
    </HeaderButtons>
  );
};

export default MenuButton;
