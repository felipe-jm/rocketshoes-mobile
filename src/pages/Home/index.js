import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { ImageBackground, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';
import background from '../../assets/images/background.png';
import api from '../../services/api';

import * as CartActions from '../../store/modules/cart/actions';

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

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('/products');

      const data = response.data.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  const dispatch = useDispatch();

  function handleAdd(id) {
    dispatch(CartActions.addToCartRequest(id));
  }

  function renderProduct({ item }) {
    return (
      <Container>
        <ProductContainer key={item.id}>
          <ProductImage source={{ uri: item.image }} />
          <ProductName>{item.title}</ProductName>
          <ProductPrice>{item.priceFormatted}</ProductPrice>
          <ProductButton onPress={() => handleAdd(item.id)}>
            <ProductAmount>
              <Icon name="add-shopping-cart" color="#FFF" size={20} />
              <Amount />
            </ProductAmount>
            <ProductButtonText>Add to cart</ProductButtonText>
          </ProductButton>
        </ProductContainer>
      </Container>
    );
  }

  return (
    <ImageBackground
      source={background}
      style={{ width: '100%', height: '100%' }}
    >
      <FlatList
        horizontal
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={renderProduct}
      />
    </ImageBackground>
  );
}
