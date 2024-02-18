import {RFPercentage} from 'react-native-responsive-fontsize';
import {styled} from 'styled-components/native';

export const CardContainer = styled.View`
  width: 100%;
  height: ${RFPercentage(10)}px;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: ${RFPercentage(1)}px;
  padding: ${RFPercentage(2)}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${RFPercentage(2)}px;
`;

export const CardTitle = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text};
`;

export const CardDate = styled.Text`
  font-size: ${RFPercentage(2)}px;
  margin-top: ${RFPercentage(1)}px;
  color: ${({theme}) => theme.colors.primary};
`;

export const ValueText = styled.Text`
  font-size: 18px;
  padding-top: ${RFPercentage(2)}px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text};
`;
