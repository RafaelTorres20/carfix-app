import {RFPercentage} from 'react-native-responsive-fontsize';
import {InputText, Label} from './styles';
import {View} from 'react-native';

export const Input = ({
  label,
  placeholder,
  secure,
}: {
  label: string;
  placeholder: string;
  secure?: boolean;
}) => {
  return (
    <View style={{width: '100%'}}>
      <Label>{label}</Label>
      <InputText
        style={{marginBottom: RFPercentage(1)}}
        placeholder={placeholder}
        secureTextEntry={secure}
      />
    </View>
  );
};
