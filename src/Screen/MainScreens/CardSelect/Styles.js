import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../Styles/Colors';

const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainHeader: {
    flexDirection: 'row',
    marginTop: 25,
    width: widthScreen / 1.12,
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  indecatorStyle: {
    width: 30,
    height: 30,
  },
  donateText: {
    fontSize: 21,
    marginTop: 2,
    fontWeight: '500',
    color: Colors.primary,
  },
  donateText1: {
    fontSize: 21,
    fontWeight: '500',
    color: Colors.White,
  },
  paymentContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  showPaymentWrapper: {
    flexDirection: 'row',
    marginTop: 15,
    justifyContent: 'space-between',
    width: widthScreen / 1.12,
    alignSelf: 'center',
    backgroundColor: Colors.White,
    borderRadius: 15,
    borderWidth: 1,
    height: 70,
    alignItems: 'center',
  },
  mainProfileWrapper1: {
    width: 30,
    height: 30,
  },
  rightArrowStyle: {
    width: 140,
    height: 45,
    marginLeft: 15,
    marginTop: -8,
  },
  logoWrapper: {
    width: 100,
    height: 30,
    marginLeft: 15,
    // marginTop: 5
  },
  logoWrapper1: {
    width: 60,
    height: 20,
    marginLeft: 15,
    marginTop: 4,
  },
  logoWrapper2: {
    width: 130,
    height: 20,
    marginTop: 6,
    marginLeft: 15,
  },
  logoWrapper3: {
    width: 100,
    height: 30,
    // marginTop: 2,
    marginLeft: 15,
  },
  titleText: {
    fontSize: 20,
    fontWeight: '500',
    marginLeft: 10,
    marginTop: 2,
  },
  donateButton: {
    width: widthScreen / 1.12,
    height: 55,
    backgroundColor: Colors.appHeaderColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    alignSelf: 'center',
    marginBottom: 20,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.White,
  },
  rightArrowStyle1: {
    width: 27,
    height: 13,
    marginTop: 6,
    marginLeft: 10,
  },
  titleText1: {
    fontSize: 12,
    fontWeight: '500',
    // marginLeft: 10,
    marginTop: 15,
    color: '#6D7E92',
    width: '88%',
    alignSelf: 'center',
  },
  headerText: {
    fontSize: 19,
    fontWeight: '500',
    marginLeft: 10,
    marginBottom: 15,
    marginTop: 25,
    width: '90%',
    alignSelf: 'center',
  },
});
export default styles;
