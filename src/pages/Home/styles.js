import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ProductsList = styled.FlatList``;

export const ProductContainer = styled.View`
  background: #eee;
  padding: 10px 20px;
  border-radius: 4px;
`;

export const ProductImage = styled.Image`
  width: 250px;
`;

export const ProductName = styled.Text``;

export const ProductPrice = styled.Text``;

export const ProductButton = styled(RectButton)``;

export const ProductButtonText = styled.Text``;
