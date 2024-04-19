import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const HeadTitle = styled.View`
  height: ${RFPercentage(8.3)}px;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<{$size: number}>`
  font-size: ${({$size}) => {
    return RFPercentage($size);
  }}px;
  font-weight: bold;
  text-align: center;
  color: ${({theme}) => theme.colors.text};
`;
