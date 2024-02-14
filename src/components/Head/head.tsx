import {SafeAreaView} from 'react-native';
import {HeadTitle, Title} from './styles';

export const Head = ({title}: {title: string}) => {
  return (
    <SafeAreaView>
      <HeadTitle>
        <Title>{title}</Title>
      </HeadTitle>
    </SafeAreaView>
  );
};
