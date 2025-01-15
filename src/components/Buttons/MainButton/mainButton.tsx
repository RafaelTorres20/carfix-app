import { ActivityIndicator, TouchableOpacity } from 'react-native';

import theme from '../../../styles/theme';
import { ButtonText, PrimaryButton } from './styles';

interface MainButtonProps
  extends React.ComponentProps<typeof TouchableOpacity> {
  size?: 'small' | 'large';
  children: React.ReactNode;
  color?: string;
  isLoading?: boolean;
}

export const MainButton = ({
  children,
  color,
  size,
  isLoading,
  ...rest
}: MainButtonProps) => {
  return (
    <PrimaryButton {...rest} $size={size}>
      <ButtonText style={{color: color ?? theme.colors.white}}>
        {!isLoading ? (
          children
        ) : (
          <ActivityIndicator size="small" color={theme.colors.white} />
        )}
      </ButtonText>
    </PrimaryButton>
  );
};
