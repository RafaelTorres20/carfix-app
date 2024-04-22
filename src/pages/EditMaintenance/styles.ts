import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import theme from '../../styles/theme';

export const LogoContainer = styled.View`
  margin-top: ${RFPercentage(5)}px;
  padding-left: ${RFPercentage(5)}px;
  padding-right: ${RFPercentage(5)}px;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text.attrs({
  style: {
    color: theme.colors.placeholder,
  },
})`
  font-size: ${RFPercentage(2.5)}px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text};
`;

export const Content = styled.View`
  margin-top: ${RFPercentage(5)}px;
  padding-left: ${RFPercentage(5)}px;
  padding-right: ${RFPercentage(5)}px;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const ForgotPassword = styled.View`
  width: 100%;
  margin-top: ${RFPercentage(1.5)}px;
  margin-bottom: ${RFPercentage(3.5)}px;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const CheckBoxContainer = styled.View`
  margin-top: ${RFPercentage(2)}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
