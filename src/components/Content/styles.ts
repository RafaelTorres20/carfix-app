import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: ${RFPercentage(75)}px;
  margin-top: ${RFPercentage(5)}px;
  padding-left: ${RFPercentage(5)}px;
  padding-right: ${RFPercentage(5)}px;
  justify-content: flex-start;
  align-items: flex-start;
`;
