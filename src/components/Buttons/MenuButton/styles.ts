import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const ButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  width: 100%;
  height: ${RFPercentage(5.5)}px;
  justify-content: flex-start;
  align-items: center;
  border-radius: ${RFPercentage(1)}px;
  flex-direction: row;
  margin-bottom: ${RFPercentage(2)}px;
`;

export const ButtonIcon = styled.View<{$backgroundColor: string | undefined}>`
  width: ${RFPercentage(5)}px;
  height: ${RFPercentage(5)}px;
  justify-content: center;
  align-items: center;
  border-radius: ${RFPercentage(1)}px;
  background-color: ${({theme, $backgroundColor}) =>
    $backgroundColor ?? theme.colors.backgroundButton};
`;

export const ButtonText = styled.Text`
  margin-left: ${RFPercentage(2)}px;
  font-size: ${RFPercentage(2.5)}px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text};
`;
