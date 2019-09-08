import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ProductContainer = styled.View`
  background: #23272a;
  max-width: 400px;
  height: 400px;
  padding: 30px 30px;
  border-radius: 4px;
  margin: 0 10px;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 250px;
  height: 200px;
  border-radius: 4px;
`;

export const ProductName = styled.Text`
  font-size: 16px;
  margin: 5px 0;
  color: #fff;
`;

export const ProductPrice = styled.Text`
  color: #fff;
  font-weight: bold;
  margin: 5px 0;
`;

export const ProductButton = styled(RectButton)`
  padding: 10px 20px;
  background: #005b96;
  border-radius: 4px;
  margin-top: auto;

  flex-direction: row;
`;

export const ProductButtonText = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const ProductAmount = styled.View`
  flex-direction: row;
  margin-right: 10px;
`;

export const Amount = styled.Text`
  color: #fff;
`;
