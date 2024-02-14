import {View} from 'react-native';
import {Container} from './styles';

export const Content = ({children}: {children: React.ReactNode}) => {
  return <Container>{children}</Container>;
};
