import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Forgot} from '../pages/Forgot';
import {Login} from '../pages/Login';
import {Register} from '../pages/Register';

const {Navigator, Screen} = createNativeStackNavigator();
export const AuthRoutes = () => {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Login" component={Login} />
      <Screen name="Forgot" component={Forgot} />
      <Screen name="Register" component={Register} />
    </Navigator>
  );
};
