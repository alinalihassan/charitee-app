import { StyleSheet, Dimensions } from 'react-native';
import Metrics from '../../Styles/Metrices';
import Colors from '../../Styles/Colors';

const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    backgroundColor: 'white',
  },
  introFirstImage: {
    width: '75%',
    height: 300,
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
    fontSize: 26,
    fontWeight: '700',
    alignSelf: 'center',
    color: Colors.black,
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
    width: 70,
    height: 9,
    marginTop: '10%',
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
    // marginTop: '10%',
    width: widthScreen / 1.12,
    height: 55,
    backgroundColor: Colors.appHeaderColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    alignSelf: 'center',
  },
  donateText: {
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
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  paginationDots: {
    height: 16,
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
