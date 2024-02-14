import {ButtonText, PrimaryButton} from './styles';
import theme from '../../../styles/theme';

type SecondaryButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  color?: string;
};

export const SecondaryButton = ({
  children,
  onClick,
  color,
}: SecondaryButtonProps) => {
  return (
    <PrimaryButton onPress={onClick}>
      <ButtonText style={{color: color ?? theme.colors.text}}>
        {children}
      </ButtonText>
    </PrimaryButton>
  );
};
