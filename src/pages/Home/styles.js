import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ProductsList = styled.FlatList``;

export const ProductContainer = styled.View`
  background: #ddd;
  padding: 30px 30px;
  border-radius: 4px;
`;

export const ProductImage = styled.Image`
  width: 250px;
  border-radius: 4px;
`;

export const ProductName = styled.Text`
  font-size: 16px;
  margin: 5px 0;
  color: #333;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  margin: 5px 0;
`;

export const ProductButton = styled(RectButton)`
  margin: 5px 0;
  padding: 10px 20px;
  background: #005b96;
  border-radius: 4px;
`;

export const ProductButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;
