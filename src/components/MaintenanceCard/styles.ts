import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Card = styled.View`
  background-color: ${({theme}) => theme.colors.white};
  border-radius: ${RFPercentage(2)}px;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 85%;
  height: auto;
  margin-bottom: ${RFPercentage(2)}px;
`;

export const Line = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: ${RFPercentage(2)}px;
`;

export const TitleContent = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  justify-content: flex-start;
  margin-left: ${RFPercentage(2)}px;
`;

export const CardTitle = styled.Text`
  font-size: ${RFPercentage(2)}px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text};
`;

export const PreviousKM = styled.View`
  flex-direction: column;
  font-size: ${RFPercentage(2)}px;
  margin-left: ${RFPercentage(2)}px;
  color: ${({theme}) => theme.colors.text};
`;

export const NextKM = styled.View`
  flex-direction: column;
  font-size: ${RFPercentage(2)}px;
  margin-right: ${RFPercentage(2)}px;
  justify-content: flex-end;
  align-items: flex-end;
  color: ${({theme}) => theme.colors.text};
`;

export const TextCard = styled.Text`
  font-size: ${RFPercentage(2.2)}px;
  color: ${({theme}) => theme.colors.text};
`;

export const Percentual = styled.Text`
  font-size: ${RFPercentage(2)}px;
  font-weight: bold;
  color: ${({theme}) => theme.colors.text};
`;
