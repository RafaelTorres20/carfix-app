import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

import theme from '../../styles/theme';

export const HeadTitle = styled.View`
  height: auto;
  min-height: ${RFPercentage(7)}px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const TitleInput = styled.TextInput.attrs({
  placeholderTextColor: theme.colors.placeholder,
})<{$size: number}>`
    
  width: 100%;
  font-size: ${({$size}) => {
    return RFPercentage($size);
  }}px;
  font-weight: bold;
  text-align: center;
  color: ${({theme}) => theme.colors.text};
`;
