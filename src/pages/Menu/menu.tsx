import {View, Text, SafeAreaView} from 'react-native';
import {GoBackButton} from '../../components/GoBackButton/GoBack';
import {Content} from '../../components/Content/content';
import {useNavigation} from '@react-navigation/native';

export const Menu = () => {
  const {goBack} = useNavigation();
  return (
    <SafeAreaView>
      <Content>
        <View
          style={{
            width: '100%',
            alignItems: 'flex-end',
          }}>
          <GoBackButton
            onPress={() => {
              goBack();
            }}
            style={{transform: [{rotate: '180deg'}]}}
          />
        </View>
      </Content>
    </SafeAreaView>
  );
};
