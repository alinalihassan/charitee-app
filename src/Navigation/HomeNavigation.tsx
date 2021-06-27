import { createStackNavigator } from 'react-navigation-stack';
import ProductDescriptionAbout from '../Screen/ProductDescriptionAbout';
import MainContainer from './BottomTabNavigation';
import ProductDescriptionView from '../Screen/MainScreens/ProductDescriptionView';
import Donate from '../Screen/MainScreens/Donate';
import DonationPayment from '../Screen/MainScreens/DonationPayment';
import CardSelect from '../Screen/MainScreens/CardSelect';
import CreditCardDetails from '../Screen/MainScreens/CreditCardDetails';
import PaymentStatus from '../Screen/MainScreens/PaymentStatus';
import FailedStatus from '../Screen/MainScreens/PaymentStatus/failedStatus';

const HomeNavigation = createStackNavigator(
  {
    main: MainContainer,
    ProductDescriptionAbout,
    ProductDescriptionView,
    Donate,
    DonationPayment,
    CardSelect,
    CreditCardDetails,
    PaymentStatus,
    FailedStatus,
  },

  {
    navigationOptions: {
      header: null,
    },
    headerMode: 'none',
  },
);
export default HomeNavigation;
