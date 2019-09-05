import styled from 'styled-components/native';

import logo from '../../assets/images/Logo.png';

export const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  background: #000;
  padding: 10px 5px;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  margin-left: 10px;
  width: 185px;
  height: 24px;
`;

export const Cart = styled.TouchableOpacity`
  flex-direction: row;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
  margin-right: 15px;
`;

export const Count = styled.Text`
  position: absolute;
  text-align: center;
  color: #fff;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  background: #005b96;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;
