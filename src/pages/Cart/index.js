import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

class Cart extends Component {
  handleRemove = id => {
    const { removeFromCart } = this.props;

    removeFromCart(id);
  };

  increment(product) {
    const { updateAmount } = this.props;

    updateAmount(product.id, product.amount + 1);
  }

  decrement(product) {
    const { updateAmount } = this.props;

    updateAmount(product.id, product.amount - 1);
  }

  render() {
    const { products, total } = this.props;

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
                  <ProductPrice>{item.price}</ProductPrice>
                </ProductDescription>
                <ProductDelete onPress={() => this.handleRemove(item.id)}>
                  <Icon name="delete-forever" size={32} color="#005b96" />
                </ProductDelete>
              </ProductData>
              <AmountContainer>
                <Amount>
                  <AmountButton onPress={() => this.decrement(item)}>
                    <Icon
                      name="remove-circle-outline"
                      size={24}
                      color="#005b96"
                    />
                  </AmountButton>
                  <AmountText>{item.amount}</AmountText>
                  <AmountButton onPress={() => this.increment(item)}>
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
}

const mapStateToProps = state => ({
  products: state.cart.map(product => ({
    ...product,
    subtotal: formatPrice(product.price * product.amount),
  })),
  total: formatPrice(
    state.cart.reduce((total, product) => {
      return total + product.price * product.amount;
    }, 0)
  ),
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);
