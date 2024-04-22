import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Header = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: ${RFPercentage(23)}px;
  background-color: ${({theme}) => theme.colors.background};
  width: 100%;
`;

export const MenuButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})`
  margin: ${RFPercentage(1)}px;
  padding: ${RFPercentage(2)}px;
  position: absolute;
  right: ${RFPercentage(4)}px;
  top: ${RFPercentage(1)}px;
  height: ${RFPercentage(6)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.backgroundButton};
  border-radius: 10px;
`;

export const ImageCar = styled.Image`
  width: ${RFPercentage(23)}px;
  height: ${RFPercentage(23)}px;
  border-radius: 10000px;
`;

export const InfosContainer = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.background};
`;

export const CarName = styled.Text`
  font-size: ${RFPercentage(3)}px;
  font-family: bold;
  color: ${({theme}) => theme.colors.text};
  margin-bottom: ${RFPercentage(2)}px;
`;

export const Plate = styled.View`
  background-color: ${({theme}) => theme.colors.primary};
  padding-left: ${RFPercentage(2)}px;
  padding-right: ${RFPercentage(2)}px;
  border-radius: ${RFPercentage(1)}px;
  width: ${RFPercentage(20)}px;
  justify-content: center;
  align-items: center;
  margin-bottom: ${RFPercentage(3)}px;
`;

export const PlateText = styled.Text`
  font-size: ${RFPercentage(3)}px;
  font-family: bold;
  color: ${({theme}) => theme.colors.white};
`;

export const MenuBar = styled.View`
  flex-direction: row;
  justify-content: space-around;
  background-color: ${({theme}) => theme.colors.background};
  width: 100%;
  height: ${RFPercentage(7)}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.backgroundButton};
`;

export const MenuItem = styled.TouchableOpacity`
  width: ${RFPercentage(10)}px;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.background};
`;
