import {TouchableOpacity} from 'react-native';
import {ButtonContainer, ButtonIcon, ButtonText} from './styles';

interface IconProps extends React.ComponentProps<typeof TouchableOpacity> {
  icon: React.ReactNode;
  text: string;
  backgroundColor?: string;
}

export const MenuButton = ({
  icon,
  text,
  backgroundColor,
  ...rest
}: IconProps) => {
  return (
    <ButtonContainer {...rest}>
      <ButtonIcon $backgroundColor={backgroundColor}>{icon}</ButtonIcon>
      <ButtonText>{text}</ButtonText>
    </ButtonContainer>
  );
};
