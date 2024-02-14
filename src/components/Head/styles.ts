import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const HeadTitle = styled.View`
  height: ${RFPercentage(8.3)}px;
  align-items: center;
  justify-content: flex-end;
`;

export const Title = styled.Text`
  font-size: ${RFPercentage(4.5)}px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text};
`;
