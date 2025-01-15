import { ActivityIndicator, TouchableOpacityProps } from 'react-native';

import theme from '../../../styles/theme';
import { ButtonText, PrimaryButton } from './styles';

interface SecondaryButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  onClick?: () => void;
  color?: string;
  isLoading?: boolean;
}

export const SecondaryButton = ({
  children,
  onClick,
  color,
  isLoading,
  ...rest
}: SecondaryButtonProps) => {
  return (
    <PrimaryButton {...rest} onPress={onClick}>
      <ButtonText style={{color: color ?? theme.colors.text}}>
        {!isLoading ? (
          children
        ) : (
          <ActivityIndicator size="small" color={theme.colors.white} />
        )}
      </ButtonText>
    </PrimaryButton>
  );
};
