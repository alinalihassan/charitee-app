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
    width: '65%',
    height: 250,
  },
  mainContainer: {
    flex: 0.55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 0.4,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 35,
    fontWeight: '700',
    alignSelf: 'center',
    color: Colors.black,
    marginBottom: 20,
  },
  descriptionText: {
    fontSize: 17,
    fontWeight: '400',
    alignSelf: 'center',
    color: Colors.textColor,
    marginTop: '10%',
    textAlign: 'center',
    width: widthScreen / 1.2,
  },
  descriptionText1: {
    fontSize: 17,
    fontWeight: '400',
    alignSelf: 'center',
    color: Colors.textColor,
    marginTop: '10%',
    textAlign: 'center',
    width: '70%',
  },
  descriptionText2: {
    fontSize: 17,
    fontWeight: '400',
    alignSelf: 'center',
    color: Colors.textColor,
    marginTop: '10%',
    width: '45%',
    textAlign: 'center',
  },
  descriptionText3: {
    fontSize: 17,
    fontWeight: '400',
    alignSelf: 'center',
    color: Colors.textColor,
    textAlign: 'center',
    width: '70%',
  },
  indecatorStyle: {
    width: 30,
    height: 30,
    marginTop: '16%',
    marginLeft: 20,
  },
  introSecondImage: {
    width: '95%',
    height: 320,
  },
  introThirdImage: {
    width: '78%',
    height: 340,
  },
  buttoWrapper: {
    marginTop: '18%',
    width: '60%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 12,
    backgroundColor: Colors.appHeaderColor,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '700',
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
  donateText: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.White,
    marginLeft: 10,
    marginTop: 5,
  },
  donateText1: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.White,
    marginLeft: 10,
    marginTop: 3,
  },
  rightArrowStyle: {
    width: 30,
    height: 30,
    // marginTop: 3,
  },
  appleStyle: {
    width: 20,
    height: 25,
  },
  bottomWrapper: {
    marginBottom: 15,
    marginTop: 40,
  },
  bottomText1: {
    fontSize: 14,
    color: Colors.textColor,
  },
  bottomTerm: {
    fontSize: 14,
    color: '#4890F0',
  },
  bottomTerm1: {
    fontSize: 14,
    color: '#4890F0',
    marginLeft: 3,
  },
  bottomAnd: {
    fontSize: 14,
    color: Colors.textColor,
    marginLeft: 3,
  },
});
export default styles;
