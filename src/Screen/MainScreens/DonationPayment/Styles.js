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
  mainScreenConatiner: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: '13%',
  },
  inputWrapper: {
    height: 50,
    width: widthScreen / 1.12,
    alignSelf: 'center',
  },
  inputWrapper1: {
    height: 50,
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: 20,
    textAlign: 'center',
    fontSize: 20,
    borderWidth: 1.5,
    borderRadius: 12,
    borderColor: '#4890F0',
    fontWeight: '600',
  },
  donateButton: {
    marginTop: '10%',
    width: widthScreen / 1.12,
    height: 55,
    backgroundColor: Colors.appHeaderColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    alignSelf: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.White,
  },
  rightArrowStyle: {
    width: 27,
    height: 13,
    marginTop: 6,
    marginLeft: 10,
  },
  bottomWrapper: {
    marginTop: '15%',
  },
  bottomText1: {
    fontSize: 15,
    color: Colors.textColor,
    textAlign: 'center',
  },
  loginText: {
    fontSize: 20,
    color: Colors.appHeaderColor,
    textAlign: 'center',
    fontWeight: '500',
    marginTop: 13,
  },
  appleButton: {
    marginTop: 20,
    width: widthScreen / 1.12,
    height: 55,
    backgroundColor: Colors.black,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    alignSelf: 'center',
  },
  appleStyle: {
    width: 20,
    height: 25,
  },
  mainProfileWrapper1: {
    width: 50,
    height: 50,
  },
  titleText: {
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 10,
    marginTop: 15,
    color: '#6D7E92',
  },
  headerText: {
    fontSize: 19,
    fontWeight: '600',
    marginLeft: 10,
    marginTop: 25,
  },
});
export default styles;
