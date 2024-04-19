import {TouchableOpacity} from 'react-native';
import ArrowRight from '../../assets/arrow-right.svg';
import theme from '../../styles/theme';
import {ArrowCircleButton} from './styles';

interface ArrowButton extends React.ComponentProps<typeof TouchableOpacity> {}

export const ArrowButton = ({...rest}: ArrowButton) => {
  return (
    <ArrowCircleButton {...rest}>
      <ArrowRight fill={theme.colors.text} />
    </ArrowCircleButton>
  );
};
