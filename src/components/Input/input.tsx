import {RFPercentage} from 'react-native-responsive-fontsize';
import {InputText, Label} from './styles';
import {View} from 'react-native';

interface InputProps extends React.ComponentProps<typeof InputText> {
  label: string;
  placeholder: string;
  secure?: boolean;
}

export const Input = ({label, placeholder, secure, ...rest}: InputProps) => {
  return (
    <View style={{width: '100%'}}>
      <Label>{label}</Label>
      <InputText
        {...rest}
        style={{marginBottom: RFPercentage(1)}}
        placeholder={placeholder}
        secureTextEntry={secure}
      />
    </View>
  );
};
