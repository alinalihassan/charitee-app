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
    main: { screen: MainContainer },
    ProductDescriptionAbout: { screen: ProductDescriptionAbout },
    ProductDescriptionView: { screen: ProductDescriptionView },
    Donate: { screen: Donate },
    DonationPayment: { screen: DonationPayment },
    CardSelect: { screen: CardSelect },
    CreditCardDetails: { screen: CreditCardDetails },
    PaymentStatus: { screen: PaymentStatus },
    FailedStatus: { screen: FailedStatus },
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
export default HomeNavigation;
