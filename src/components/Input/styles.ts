import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Label = styled.Text`
  font-size: ${RFPercentage(2)}px;
  margin-top: ${RFPercentage(1)}px;
  margin-bottom: ${RFPercentage(2)}px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text};
`;

export const InputText = styled.TextInput.attrs({
  placeholderTextColor: theme.colors.placeholder,
})`
  width: 100%;
  height: ${RFPercentage(3)}px;
  padding-left: ${RFPercentage(2)}px;
  padding-right: ${RFPercentage(2)}px;
  padding-bottom: ${RFPercentage(1)}px;
  margin-top: ${RFPercentage(1.5)}px;
  border-bottom-color: ${({theme}) => theme.colors.primary};
  border-bottom-width: ${RFPercentage(0.4)}px;
  border-radius: 5px;
  font-weight: bold;
  background-color: ${({theme}) => theme.colors.background};
  color: ${({theme}) => theme.colors.text};
`;
