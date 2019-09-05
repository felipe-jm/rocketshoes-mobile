import React, { Component } from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, Cart, Count } from './styles';

class Header extends Component {
  render() {
    const { navigation } = this.props;

    return (
      <Container>
        <Logo />
        <Cart onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <Count>3</Count>
        </Cart>
      </Container>
    );
  }
}

export default Header;
