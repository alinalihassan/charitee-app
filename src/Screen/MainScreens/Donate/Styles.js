import { StyleSheet, Dimensions } from 'react-native';
import Metrics from '../../../Styles/Metrices';
import Colors from '../../../Styles/Colors';

const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    backgroundColor: 'white',
  },
  introFirstImage: {
    width: '80%',
    height: 230,
  },
  mainContainer: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 0.4,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 10,
    marginTop: 15,
    color: Colors.appHeaderColor,
  },
  titleText1: {
    fontSize: 35,
    fontWeight: '700',
    color: Colors.black,
    marginTop: 20,
    marginLeft: 10,
  },
  indecatorStyle: {
    width: 30,
    height: 30,
    marginTop: '16%',
  },
  headerWrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
  },
  bottomTextHeader: {
    marginTop: 20,
    fontSize: 23,
    fontWeight: '500',
  },
  description: {
    marginTop: 20,
    fontSize: 15,
    width: '85%',
    alignSelf: 'center',
    color: '#6D7E92',
    textAlign: 'center',
  },
  mainProfileWrapper: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    backgroundColor: '#F5F8FC',
  },
  mainProfileWrapper1: {
    width: 30,
    height: 30,
  },
  rightArrowStyle: {
    width: 30,
    height: 16,
    marginTop: 10,
    tintColor: Colors.appHeaderColor,
    marginRight: 15,
  },
  showPaymentWrapper: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
    width: widthScreen / 1.12,
    alignSelf: 'center',
    backgroundColor: Colors.White,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    height: 70,
    elevation: 2,
    alignItems: 'center',
  },
});
export default styles;
