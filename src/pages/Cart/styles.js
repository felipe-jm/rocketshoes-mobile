import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 10px;
  background: #23272a;
  border-radius: 4px;
  align-items: stretch;
  margin: 15px;
`;

export const ProductData = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const ProductImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 4px;
`;

export const ProductDescription = styled.View``;

export const ProductName = styled.Text`
  color: #fff;
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`;

export const ProductDelete = styled.TouchableOpacity``;

export const AmountContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  margin: 10px 0;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 4px;
`;

export const Amount = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 5px;
`;

export const AmountButton = styled.TouchableOpacity``;

export const AmountText = styled.TextInput.attrs({
  editable: false,
})`
  background: #fff;
  border-radius: 4px;
  color: #333;
  font-weight: bold;
  width: 50px;
  height: 35px;
  margin: 5px 5px;
  border: 1px solid #005b96;
  font-size: 10px;
  text-align: center;
`;

export const Subtotal = styled.Text`
  color: #fff;
  font-weight: bold;
`;

export const ProductFinalInfo = styled.View`
  align-items: center;
  margin-top: 10px;
`;

export const ProductTotalText = styled.Text`
  color: #eee;
  font-size: 16px;
`;

export const ProductTotal = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
`;

export const FinishOrder = styled.TouchableOpacity`
  align-items: stretch;
  margin: 5px 0;
  padding: 5px 20px;
  background: #005b96;
  border-radius: 4px;
  text-align: center;
`;

export const FinishOrderText = styled.Text`
  color: #fff;
  color: #fff;
  font-size: 20px;
`;
