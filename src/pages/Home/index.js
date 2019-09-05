import React, { Component } from 'react';

import { View, Image } from 'react-native';

import { Container, ProductsList } from './styles';

export default class Home extends Component {
  render() {
    return (
      <Container>
        <ProductsList />
      </Container>
    );
  }
}

Home.navigationOptions = {
  title: 'Home',
};
