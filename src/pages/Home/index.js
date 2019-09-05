import React, { Component } from 'react';

import { ImageBackground } from 'react-native';

import background from '../../assets/images/background.png';
import tenis from '../../assets/images/tenis.jpg';

import {
  Container,
  ProductsList,
  ProductContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductButton,
  ProductButtonText,
} from './styles';

export default class Home extends Component {
  render() {
    return (
      <ImageBackground
        source={background}
        style={{ width: '100%', height: '100%' }}
      >
        <Container>
          <ProductContainer>
            <ProductImage source={tenis} />
            <ProductName>Tenis maneirissimo</ProductName>
            <ProductPrice>R$19,90</ProductPrice>
            <ProductButton>
              <ProductButtonText>Add to cart</ProductButtonText>
            </ProductButton>
          </ProductContainer>
        </Container>
      </ImageBackground>
    );
  }
}
