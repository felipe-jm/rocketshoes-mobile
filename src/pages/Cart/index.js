import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native-gesture-handler';

import { ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { formatPrice } from '../../util/format';

import * as CartActions from '../../store/modules/cart/actions';
import background from '../../assets/images/background.png';

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

export default function Cart() {
  const products = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
      priceFormatted: formatPrice(product.price),
    }))
  );

  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0)
    )
  );

  const dispatch = useDispatch();

  function handleRemove(id) {
    dispatch(CartActions.removeFromCart(id));
  }

  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }

  return (
    <ImageBackground
      source={background}
      style={{ width: '100%', height: '100%' }}
    >
      <FlatList
        data={products}
        keyExtractor={product => String(product.id)}
        renderItem={({ item }) => (
          <Container>
            <ProductData>
              <ProductImage source={{ uri: item.image }} />
              <ProductDescription>
                <ProductName>{item.title}</ProductName>
                <ProductPrice>{item.priceFormatted}</ProductPrice>
              </ProductDescription>
              <ProductDelete onPress={() => handleRemove(item.id)}>
                <Icon name="delete-forever" size={32} color="#005b96" />
              </ProductDelete>
            </ProductData>
            <AmountContainer>
              <Amount>
                <AmountButton onPress={() => decrement(item)}>
                  <Icon
                    name="remove-circle-outline"
                    size={24}
                    color="#005b96"
                  />
                </AmountButton>
                <AmountText>{item.amount}</AmountText>
                <AmountButton onPress={() => increment(item)}>
                  <Icon name="add-circle-outline" size={24} color="#005b96" />
                </AmountButton>
              </Amount>
              <Subtotal>{item.subtotal}</Subtotal>
            </AmountContainer>
          </Container>
        )}
      />
      <ProductFinalInfo>
        <ProductTotalText>Total</ProductTotalText>
        <ProductTotal>{total}</ProductTotal>
        <FinishOrder>
          <FinishOrderText>Finish Order</FinishOrderText>
        </FinishOrder>
      </ProductFinalInfo>
    </ImageBackground>
  );
}
