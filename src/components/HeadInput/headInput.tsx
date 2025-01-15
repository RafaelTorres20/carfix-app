import { SafeAreaView, TextInput } from 'react-native';

import { HeadTitle, TitleInput } from './styles';

interface InputProps extends React.ComponentProps<typeof TextInput> {
  title: string;
  size: number;
  placeholder?: string;
}

export const HeadInput = ({title, size, placeholder, ...rest}: InputProps) => {
  return (
    <SafeAreaView style={{width: '100%'}}>
      <HeadTitle>
        <TitleInput {...rest} placeholder={placeholder} $size={size}>
          {title}
        </TitleInput>
      </HeadTitle>
    </SafeAreaView>
  );
};
