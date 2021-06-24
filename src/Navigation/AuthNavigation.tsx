import { createStackNavigator } from 'react-navigation-stack';
import Welcome from '../Screen/Authentication/Welcome';
import Register from '../Screen/Authentication/Register';
import Login from '../Screen/Authentication/Login';

const AuthNavigation = createStackNavigator(
  {
    Welcome: { screen: Welcome },
    Register: { screen: Register },
    Login: { screen: Login },
  },
  {
    navigationOptions: {
      header: null,
      gesturesEnabled: false,
      cardStack: { gesturesEnabled: false },
    },
    headerMode: 'none',
  },
);

export default AuthNavigation;
