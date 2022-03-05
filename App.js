import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SplashScreen from 'react-native-splash-screen';
import Auth from './src/screens/Auth';
import ForgotPassword from './src/screens/ForgotPassword';
import ChangePassword from './src/screens/ChangePassword';
import UploadPicture from './src/screens/UploadPicture';
import Location from './src/screens/Location';
import Home from './src/screens/Home';
import ServiceProviders from './src/screens/ServiceProviders';
import ServiceProviderDetails from './src/screens/ServiceProviderDetails';
import Booking from './src/screens/Booking';
import Profile from './src/screens/Profile';
import ProfileEdit from './src/screens/ProfileEdit';
import ChangeLocation from './src/screens/ChangeLocation';

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => null,
        }}
        initialRouteName="login">
        <Stack.Screen
          name="Login"
          component={Auth}
          initialParams={{isOnScreen: 'login'}}
        />
        <Stack.Screen
          name="SignUp"
          component={Auth}
          initialParams={{isOnScreen: 'signup'}}
        />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="UploadPicture" component={UploadPicture} />
        <Stack.Screen name="Location" component={Location} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ServiceProviders" component={ServiceProviders} />
        <Stack.Screen
          name="ServiceProviderDetails"
          component={ServiceProviderDetails}
        />
        <Stack.Screen name="Booking" component={Booking} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="ProfileEdit" component={ProfileEdit} />
        <Stack.Screen name="ChangeLocation" component={ChangeLocation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
