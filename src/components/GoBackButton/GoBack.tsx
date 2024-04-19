import {TouchableOpacity} from 'react-native';
import ArrowRight from '../../assets/left-arrow.svg';
import theme from '../../styles/theme';
import {GoBack} from './styles';
import {RFPercentage} from 'react-native-responsive-fontsize';

interface ArrowButton extends React.ComponentProps<typeof TouchableOpacity> {}

export const GoBackButton = ({...rest}: ArrowButton) => {
  return (
    <GoBack {...rest}>
      <ArrowRight
        width={RFPercentage(3)}
        height={RFPercentage(3)}
        fontWeight={'bold'}
        fill={theme.colors.text}
      />
    </GoBack>
  );
};
