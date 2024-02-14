import {StyleSheet} from 'react-native';
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

export const Label = styled.Text`
  font-size: ${RFPercentage(2)}px;
  margin-top: ${RFPercentage(1.5)}px;
  margin-bottom: ${RFPercentage(1.5)}px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text};
`;

export const Input = styled.TextInput.attrs({
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

export const ForgotPassword = styled.View`
  width: 100%;
  margin-top: ${RFPercentage(1.5)}px;
  margin-bottom: ${RFPercentage(3.5)}px;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const MainButton = styled.TouchableOpacity`
  width: 100%;
  height: ${RFPercentage(6)}px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.primary};
  margin-bottom: ${RFPercentage(6)}px;
`;

export const SecondaryButton = styled.TouchableOpacity`
  width: 100%;
  height: ${RFPercentage(6)}px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background-color: ${({theme}) => theme.colors.background};
  margin-bottom: ${RFPercentage(6)}px;
`;
