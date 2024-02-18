import {Text} from 'react-native';
import {ButtonText, PrimaryButton} from './styles';
import theme from '../../../styles/theme';

type MainButtonProps = {
  size?: 'small' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
  color?: string;
};

export const MainButton = ({
  children,
  onClick,
  color,
  size,
}: MainButtonProps) => {
  return (
    <PrimaryButton $size={size} onPress={onClick}>
      <ButtonText style={{color: color ?? theme.colors.white}}>
        {children}
      </ButtonText>
    </PrimaryButton>
  );
};
