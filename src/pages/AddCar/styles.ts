import {RFPercentage} from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';
import {GoBackButton} from '../../components/GoBackButton/GoBack'; // Replace 'path/to/GoBackButton' with the actual path to the GoBackButton component
import theme from '../../styles/theme';
import {StyleSheet} from 'react-native';

export const GoBackContainer = styled.View`
  width: 100%;
  align-items: flex-end;
  align-items: flex-end;
`;
export const GoBackStyled = styled(GoBackButton)`
  transform: rotate(180deg);
  margin-right: ${RFPercentage(5)}px;
  margin-top: ${RFPercentage(2.5)}px;
`;

export const ImageContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.7,
})`
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const InsideContent = styled.View`
  height: 100%;
  width: 100%;
  background-color: ${theme.colors.text};
  border-radius: ${RFPercentage(100)}px;
  opacity: 0.7;
  justify-content: center;
  align-items: center;
`;

export const InsideContentText = styled.Text`
  font-size: ${RFPercentage(3)}px;
  font-weight: bold;
  color: ${theme.colors.white};
`;

export const styles = StyleSheet.create({
  shadow: {
    elevation: 10,
    shadowColor: theme.colors.text,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    backgroundColor: theme.colors.background,
    width: RFPercentage(20),
    height: RFPercentage(20),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 1000,
  },
});
