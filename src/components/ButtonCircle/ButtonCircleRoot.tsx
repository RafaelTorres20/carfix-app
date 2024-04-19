import {ReactNode} from 'react';
import {TouchableOpacity} from 'react-native';
import {ButtonCircle} from './styles';

interface ButtonCircleRootProps
  extends React.ComponentProps<typeof TouchableOpacity> {
  children: ReactNode;
}

export const ButtonCircleRoot = ({
  children,
  ...rest
}: ButtonCircleRootProps) => {
  return <ButtonCircle {...rest}>{children}</ButtonCircle>;
};
