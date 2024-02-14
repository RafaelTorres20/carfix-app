import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import Logo from '../../assets/logo.svg';

export const Login = () => {
  return (
    <SafeAreaView>
      <View>
        <Logo width={120} height={40} fill={'#E74C3C'} />
        <Text>Login</Text>
      </View>
    </SafeAreaView>
  );
};
