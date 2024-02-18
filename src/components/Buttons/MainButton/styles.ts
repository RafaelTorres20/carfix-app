import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const PrimaryButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<{$size?: string}>`
  width: 100%;
  height: ${props => {
    if (props.$size === 'small') {
      return RFPercentage(5.5);
    } else {
      return RFPercentage(7);
    }
  }}px;
  justify-content: center;
  align-items: center;
  border-radius: ${RFPercentage(1)}px;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const ButtonText = styled.Text`
  color: ${({theme}) => theme.colors.white};
  font-size: ${RFPercentage(2.5)}px;
  font-weight: bold;
`;
