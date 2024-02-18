import ArrowRight from '../../assets/arrow-right.svg';
import theme from '../../styles/theme';
import {ArrowCircleButton} from './styles';
export const ArrowButton = () => {
  return (
    <ArrowCircleButton>
      <ArrowRight fill={theme.colors.text} />
    </ArrowCircleButton>
  );
};
