import { StyleSheet, Dimensions } from 'react-native';
import Metrics from '../../../Styles/Metrics';
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
  introFailedImage: {
    width: '60%',
    height: 250,
  },
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  mainContainerfailed: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 0.3,
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
  failedHeaderText: {
    marginTop: 20,
    fontSize: 18,
    width: '80%',
    alignSelf: 'center',
    textAlign: 'center',
  },
  description: {
    marginTop: 20,
    fontSize: 15,
    width: '85%',
    alignSelf: 'center',
    color: '#6D7E92',
    textAlign: 'center',
  },
  descriptionFailed: {
    marginTop: 20,
    fontSize: 15,
    width: '80%',
    alignSelf: 'center',
    color: '#6D7E92',
    textAlign: 'center',
  },
  description2: {
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
    marginTop: 20,
    tintColor: Colors.appHeaderColor,
    marginRight: 15,
  },
  showPaymentWrapper: {
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
    elevation: 2,
    alignItems: 'center',
    marginTop: 30,
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
    marginTop: 20,
  },
  donateButtonFailed: {
    width: widthScreen / 1.12,
    height: 55,
    backgroundColor: Colors.appHeaderColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    alignSelf: 'center',
    marginTop: 20,
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
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#DADFE6',
    marginTop: 15,
    marginBottom: 15,
    width: '90%',
  },
  mainWrapper: {
    flexDirection: 'row',
    marginTop: 15,
  },
  description1: {
    color: '#4B97FC',
    fontSize: 25,
    marginLeft: 10,
    fontWeight: '700',
  },
  failedHomeButton: {
    width: widthScreen / 1.12,
    height: 55,
    backgroundColor: Colors.White,
    borderWidth: 1,
    borderColor: Colors.appHeaderColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    alignSelf: 'center',
    marginBottom: 20,
    marginTop: 20,
  },
  failedButtonText: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.appHeaderColor,
  },
});
export default styles;
