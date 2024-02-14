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
  background-color: ${({theme}) => theme.colors.background};
  margin-bottom: ${RFPercentage(6)}px;
`;

export const ButtonText = styled.Text`
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFPercentage(2.5)}px;
  font-weight: bold;
`;
