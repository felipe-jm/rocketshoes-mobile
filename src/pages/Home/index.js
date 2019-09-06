import React, { Component } from 'react';

import { ImageBackground, FlatList } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import background from '../../assets/images/background.png';

import api from '../../services/api';

import {
  Container,
  ProductContainer,
  ProductImage,
  ProductName,
  ProductPrice,
  ProductButton,
  ProductButtonText,
  ProductAmount,
  Amount,
} from './styles';

export default class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    this.setState({
      products: response.data,
    });
  }

  render() {
    const { products } = this.state;

    return (
      <ImageBackground
        source={background}
        style={{ width: '100%', height: '100%' }}
      >
        <FlatList
          horizontal
          data={products}
          keyExtractor={product => String(product.id)}
          renderItem={({ item }) => (
            <Container>
              <ProductContainer key={item.id}>
                <ProductImage source={{ uri: item.image }} />
                <ProductName>{item.title}</ProductName>
                <ProductPrice>{item.price}</ProductPrice>
                <ProductButton>
                  <ProductAmount>
                    <Icon name="add-shopping-cart" color="#FFF" size={20} />
                    <Amount>3</Amount>
                  </ProductAmount>
                  <ProductButtonText>Add to cart</ProductButtonText>
                </ProductButton>
              </ProductContainer>
            </Container>
          )}
        />
      </ImageBackground>
    );
  }
}
