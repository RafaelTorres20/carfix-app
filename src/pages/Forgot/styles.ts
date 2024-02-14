import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export {Forgot} from './forgot';

export const HeadTitle = styled.View`
  height: ${RFPercentage(12)}px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: ${RFPercentage(4.5)}px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text};
`;

export const Content = styled.View`
  height: ${RFPercentage(75)}px;
  margin-top: ${RFPercentage(5)}px;
  padding-left: ${RFPercentage(5)}px;
  padding-right: ${RFPercentage(5)}px;
  justify-content: space-between;
  align-items: flex-start;
`;

export const Buttons = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
`;
