import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const Label = styled.Text`
  font-size: ${RFPercentage(2)}px;
  margin-top: ${RFPercentage(3)}px;
  margin-bottom: ${RFPercentage(0)}px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text};
`;

export const InputText = styled.TextInput.attrs({
  placeholderTextColor: theme.colors.placeholder,
})`
  width: 100%;
  height: ${RFPercentage(5)}px;
  padding-left: ${RFPercentage(2)}px;
  padding-right: ${RFPercentage(2)}px;
  margin-top: ${RFPercentage(0)}px;
  border-bottom-color: ${({theme}) => theme.colors.primary};
  border-bottom-width: ${RFPercentage(0.4)}px;
  border-radius: 5px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text};
`;
