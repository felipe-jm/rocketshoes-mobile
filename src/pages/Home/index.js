import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
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

class Home extends Component {
  state = {
    products: [],
  };

  async componentDidMount() {
    const response = await api.get('/products');

    const data = response.data.map(product => ({
      ...product,
      priceFormatted: formatPrice(product.price),
    }));

    this.setState({
      products: data,
    });
  }

  handleAdd = id => {
    const { addToCartRequest } = this.props;

    addToCartRequest(id);
  };

  renderProduct = ({ item }) => {
    return (
      <Container>
        <ProductContainer key={item.id}>
          <ProductImage source={{ uri: item.image }} />
          <ProductName>{item.title}</ProductName>
          <ProductPrice>{item.priceFormatted}</ProductPrice>
          <ProductButton onPress={() => this.handleAdd(item.id)}>
            <ProductAmount>
              <Icon name="add-shopping-cart" color="#FFF" size={20} />
              <Amount />
            </ProductAmount>
            <ProductButtonText>Add to cart</ProductButtonText>
          </ProductButton>
        </ProductContainer>
      </Container>
    );
  };

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
          renderItem={this.renderProduct}
        />
      </ImageBackground>
    );
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(CartActions, dispatch);

export default connect(
  null,
  mapDispatchToProps
)(Home);
