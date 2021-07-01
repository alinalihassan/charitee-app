/* eslint-disable react/style-prop-object */
import * as React from 'react';
import * as SecureStore from 'expo-secure-store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import * as SplashScreen from 'expo-splash-screen';
import Login from '../Screen/Authentication/Login';
import Home from './BottomTabNavigation';
import Welcome from '../Screen/Authentication/Welcome';
import Register from '../Screen/Authentication/Register';
import Onboarding from '../Screen/Authentication/Onboarding';
import ProductDescriptionAbout from '../Screen/MainScreens/ProductDescriptionAbout';
import ProductDescriptionView from '../Screen/MainScreens/ProductDescriptionView';
import Donate from '../Screen/MainScreens/Donate';
import DonationPayment from '../Screen/MainScreens/DonationPayment';
import CardSelect from '../Screen/MainScreens/CardSelect';
import CreditCardDetails from '../Screen/MainScreens/CreditCardDetails';
import PaymentStatus from '../Screen/MainScreens/PaymentStatus';
import FailedStatus from '../Screen/MainScreens/PaymentStatus/failedStatus';
import AuthContext from '../Utils/AuthContext';
import {
  loginRequest, registerRequest,
} from '../Utils/Networking';

const Stack = createStackNavigator();

export default function App() {
  const [state, dispatch] = React.useReducer(
    (prevState: any, action: any) => {
      switch (action.type) {
        case 'RESTORE_ONBOARDING':
          return {
            ...prevState,
            isOnboarding: action.value,
          };
        case 'RESTORE_TOKEN':
          return {
            ...prevState,
            userToken: action.token,
            isLoading: false,
          };
        case 'SIGN_IN':
          return {
            ...prevState,
            isSignOut: false,
            userToken: action.token,
          };
        case 'SIGN_OUT':
          return {
            ...prevState,
            isSignOut: true,
            userToken: null,
          };
        default:
          // console.log(`Error, invalid option for dispatch${action.type}`);
          return undefined;
      }
    },
    {
      isLoading: true,
      isSignOut: false,
      userToken: null,
      isOnboarding: true,
    },
  );

  React.useEffect(() => {
    // Fetch the token from storage then navigate to our appropriate place
    const bootstrapAsync = async () => {
      let userToken;
      let isOnboarding;

      // Keep the splash screen visible while we fetch resources
      await SplashScreen.preventAutoHideAsync();

      try {
        // Restore token stored in `SecureStore` or any other encrypted storage
        // await SecureStore.deleteItemAsync('userToken');
        // await SecureStore.deleteItemAsync('isOnboarding');
        userToken = await SecureStore.getItemAsync('userToken');
        isOnboarding = await SecureStore.getItemAsync('isOnboarding');
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      if (userToken != null) {
        dispatch({ type: 'RESTORE_TOKEN', token: userToken });
      }
      if (isOnboarding != null) {
        dispatch({ type: 'RESTORE_ONBOARDING', value: isOnboarding === 'true' });
      }

      // Remove this in the future, it's giving a glimpse of the onboarding page
      await new Promise((resolve) => setTimeout(resolve, 100));
      await SplashScreen.hideAsync();
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async (email: string, password: string) => {
        const token = await loginRequest(email, password);
        await SecureStore.setItemAsync('userToken', token);
        dispatch({ type: 'SIGN_IN', token });
      },
      signOut: () => dispatch({ type: 'SIGN_OUT' }),
      signUp: async (email: string, password: string) => {
        const token = await registerRequest(email, password);
        await SecureStore.setItemAsync('userToken', token);
        dispatch({ type: 'SIGN_IN', token });
      },
    }),
    [],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
        >
          {state.userToken == null ? (
            // No token found, user isn't signed in
            <>
              {state.isOnboarding === true
              && (
              <Stack.Screen
                name="Onboarding"
                component={Onboarding}
              />
              )}
              <Stack.Screen
                name="Welcome"
                component={Welcome}
              />
              <Stack.Screen
                name="Login"
                component={Login}
              />

              <Stack.Screen
                name="Register"
                component={Register}
              />
            </>
          ) : (
            // User is signed in
            <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="ProductDescriptionAbout" component={ProductDescriptionAbout} />
              <Stack.Screen name="ProductDescriptionView" component={ProductDescriptionView} />
              <Stack.Screen name="Donate" component={Donate} />
              <Stack.Screen name="DonationPayment" component={DonationPayment} />
              <Stack.Screen name="CardSelect" component={CardSelect} />
              <Stack.Screen name="CreditCardDetails" component={CreditCardDetails} />
              <Stack.Screen name="PaymentStatus" component={PaymentStatus} />
              <Stack.Screen name="FailedStatus" component={FailedStatus} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="dark" />
    </AuthContext.Provider>
  );
}
