import {SafeAreaView} from 'react-native';
import {HeadTitle, Title} from './styles';

export const Head = ({title, size}: {title: string; size: number}) => {
  return (
    <SafeAreaView style={{width: '100%'}}>
      <HeadTitle>
        <Title $size={size}>{title}</Title>
      </HeadTitle>
    </SafeAreaView>
  );
};
