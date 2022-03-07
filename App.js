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
import BookNow from './src/screens/BookNow';
import VerificationScreen from './src/screens/VerificationScreen';
import BookingLists from './src/screens/BookingLists';
import PrivacyPolicy from './src/screens/PrivacyPolicy';
import TermsAndConditions from './src/screens/TermsAndConditions';
import Notifications from './src/screens/Notifications';
import BookingsEdit from './src/screens/BookingsEdit';
import BookingDetails from './src/screens/BookingDetails';
import Onboarding1 from './src/screens/Onboarding1';
import Onboarding2 from './src/screens/Onboarding2';

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
        initialRouteName="Onboarding1">
        <Stack.Screen name="Onboarding1" component={Onboarding1} />
        <Stack.Screen name="Onboarding2" component={Onboarding2} />
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
        <Stack.Screen name="BookNow" component={BookNow} />
        <Stack.Screen name="Verification" component={VerificationScreen} />
        <Stack.Screen name="BookingLists" component={BookingLists} />
        <Stack.Screen
          name="TermsAndConditions"
          component={TermsAndConditions}
        />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="BookingsEdit" component={BookingsEdit} />
        <Stack.Screen name="BookingDetails" component={BookingDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
