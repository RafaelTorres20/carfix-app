import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const GoBack = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  padding: 10px;
  height: ${RFPercentage(6)}px;
  background-color: ${({theme}) => theme.colors.backgroundButton};
  border-radius: 10px;
`;
