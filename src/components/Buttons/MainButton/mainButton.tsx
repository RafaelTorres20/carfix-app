import {Text} from 'react-native';
import {ButtonText, PrimaryButton} from './styles';
import theme from '../../../styles/theme';

type MainButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  color?: string;
};

export const MainButton = ({children, onClick, color}: MainButtonProps) => {
  return (
    <PrimaryButton onPress={onClick}>
      <ButtonText style={{color: color ?? theme.colors.white}}>
        {children}
      </ButtonText>
    </PrimaryButton>
  );
};
