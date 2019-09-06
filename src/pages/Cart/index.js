import React, { Component } from 'react';

import { ImageBackground } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import background from '../../assets/images/background.png';
import tenis from '../../assets/images/tenis.jpg';

import {
  Container,
  ProductData,
  ProductImage,
  ProductDescription,
  ProductName,
  ProductPrice,
  AmountContainer,
  Amount,
  AmountButton,
  AmountText,
  Subtotal,
  ProductDelete,
  ProductFinalInfo,
  ProductTotalText,
  ProductTotal,
  FinishOrder,
  FinishOrderText,
} from './styles';

export default class Cart extends Component {
  render() {
    return (
      <ImageBackground
        source={background}
        style={{ width: '100%', height: '100%' }}
      >
        <Container>
          <ProductData>
            <ProductImage source={tenis} />
            <ProductDescription>
              <ProductName>tenis maneiro</ProductName>
              <ProductPrice>R$19,20</ProductPrice>
            </ProductDescription>
            <ProductDelete>
              <Icon name="delete-forever" size={32} color="#005b96" />
            </ProductDelete>
          </ProductData>
          <AmountContainer>
            <Amount>
              <AmountButton>
                <Icon name="remove-circle-outline" size={24} color="#005b96" />
              </AmountButton>
              <AmountText>3</AmountText>
              <AmountButton>
                <Icon name="add-circle-outline" size={24} color="#005b96" />
              </AmountButton>
            </Amount>
            <Subtotal>Subtotal: R$99,00</Subtotal>
          </AmountContainer>
          <ProductFinalInfo>
            <ProductTotalText>Total</ProductTotalText>
            <ProductTotal>R$990,00</ProductTotal>
            <FinishOrder>
              <FinishOrderText>Finish Order</FinishOrderText>
            </FinishOrder>
          </ProductFinalInfo>
        </Container>
      </ImageBackground>
    );
  }
}
