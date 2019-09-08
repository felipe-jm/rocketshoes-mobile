import React, { Component } from 'react';
import { connect } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, Logo, Cart, Count } from './styles';

class Header extends Component {
  render() {
    const { navigation, cartSize } = this.props;

    return (
      <Container>
        <Logo />
        <Cart onPress={() => navigation.navigate('Cart')}>
          <Icon name="shopping-basket" color="#FFF" size={24} />
          <Count>{cartSize || 0}</Count>
        </Cart>
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  cartSize: state.cart.length,
});

export default connect(mapStateToProps)(Header);
