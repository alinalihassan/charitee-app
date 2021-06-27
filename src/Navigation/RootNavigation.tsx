import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import HomeNavigation from './HomeNavigation';
import AuthNavigation from './AuthNavigation';
import Onboarding from '../Screen/Onboarding';

const AppNavigator = createSwitchNavigator(
  {
    Onboarding,
    AuthNavigation,
    HomeNavigation,
  },
  {
    initialRouteName: 'Onboarding',
  },
);

export default createAppContainer(AppNavigator);
