import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const CurrentKMBar = styled.View`
  flex-direction: row;
  justify-content: center;
  background-color: ${({theme}) => theme.colors.background};
  width: 100%;
  height: ${RFPercentage(7)}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.backgroundButton};
`;

export const KMText = styled.Text`
  font-size: ${RFPercentage(3)}px;
  font-weight: bold;
  align-items: center;
  line-height: ${RFPercentage(7)}px;
  color: ${({theme}) => theme.colors.text};
  margin-left: ${RFPercentage(1)}px;
  margin-right: ${RFPercentage(1)}px;
`;

export const KMValue = styled.TextInput.attrs({
  placeholder: '100.000',
  keyboardType: 'numeric',
})`
  font-size: ${RFPercentage(2)}px;
  font-family: bold;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: ${RFPercentage(5.5)}px;
  color: ${({theme}) => theme.colors.text};
  padding-left: ${RFPercentage(1)}px;
  margin-left: ${RFPercentage(2)}px;
  margin-right: ${RFPercentage(2)}px;
  border-width: ${RFPercentage(0.2)}px;
  border-radius: ${RFPercentage(1)}px;
  border-color: ${({theme}) => theme.colors.text};
`;

export const UpdateKMButton = styled.View`
  align-items: center;
  justify-content: center;
  width: 25%;
  margin-left: ${RFPercentage(1)}px;
`;
