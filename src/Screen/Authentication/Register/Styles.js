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
    marginTop: '30%',
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
    marginTop: 30,
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
});
export default styles;
