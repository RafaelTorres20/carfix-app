import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const PrimaryButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: 100%;
  height: ${RFPercentage(7)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${RFPercentage(1.5)}px;
  background-color: ${({theme}) => theme.colors.primary};
  margin-bottom: ${RFPercentage(3)}px;
  margin-top: ${RFPercentage(5)}px;
`;

export const ButtonText = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-size: ${RFPercentage(2.5)}px;
  font-weight: bold;
`;
