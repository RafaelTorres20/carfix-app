import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const ArrowCircleButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  justify-content: center;
  align-items: center;
  margin-right: ${RFPercentage(2)}px;
  width: ${RFPercentage(4)}px;
  height: ${RFPercentage(4)}px;
  background-color: ${({theme}) => theme.colors.backgroundButton};
  border-radius: 100px;
  border: none;
`;
