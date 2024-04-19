import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const ButtonCircle = styled.TouchableOpacity`
  position: absolute;
  background-color: ${({theme}) => theme.colors.primary};
  padding: ${RFPercentage(1)}px;
  border-radius: 100px;
  width: ${RFPercentage(10)}px;
  height: ${RFPercentage(10)}px;
  justify-content: center;
  align-items: center;
  bottom: ${RFPercentage(2)}px;
  right: ${RFPercentage(2)}px;
  z-index: 10;
`;
