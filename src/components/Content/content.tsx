import {View} from 'react-native';
import {Container} from './styles';

interface ContentProps extends React.ComponentProps<typeof View> {
  children: React.ReactNode;
}

export const Content = ({children, ...rest}: ContentProps) => {
  return <Container {...rest}>{children}</Container>;
};
