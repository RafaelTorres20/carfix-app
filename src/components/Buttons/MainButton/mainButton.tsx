import {Text, TouchableOpacity} from 'react-native';
import {ButtonText, PrimaryButton} from './styles';
import theme from '../../../styles/theme';

interface MainButtonProps
  extends React.ComponentProps<typeof TouchableOpacity> {
  size?: 'small' | 'large';
  children: React.ReactNode;
  onClick?: () => void;
  color?: string;
}

export const MainButton = ({
  children,
  onClick,
  color,
  size,
  ...rest
}: MainButtonProps) => {
  return (
    <PrimaryButton {...rest} $size={size} onPress={onClick}>
      <ButtonText style={{color: color ?? theme.colors.white}}>
        {children}
      </ButtonText>
    </PrimaryButton>
  );
};
