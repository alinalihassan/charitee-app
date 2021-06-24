import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;
const styles = StyleSheet.create({
  safeViewStyle: {
    flex: 1,
    backgroundColor: '#F7F8FA',
  },
  safeViewStyle1: {
    backgroundColor: Colors.White,
  },
  mainContainer: {
    width: widthScreen,
    backgroundColor: Colors.White,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    marginTop: -20,
  },
  headerText: {
    marginTop: 20,
    textAlign: 'center',
    fontSize: 25,
    fontWeight: '600',
  },
  mainWrapper: {
    flexDirection: 'row',
  },
  description1: {
    color: '#4B97FC',
    fontSize: 20,
    fontWeight: '700',
  },
  description2: {
    color: '#7689A2',
    fontSize: 15,
    fontWeight: '500',
    marginTop: 5,
    marginLeft: 3,
  },
  description3: {
    color: '#073C7A',
    fontSize: 17,
    fontWeight: '600',
    marginTop: 3,
    marginLeft: 3,
  },
  mainContainerWrapper: {
    width: widthScreen / 1.13,
    alignSelf: 'center',
    marginBottom: 20,
  },
  dataContentWrapper: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  dataContentWrapper1: {
    width: widthScreen / 1.1,
    marginLeft: -10,
    alignSelf: 'center',
    flexDirection: 'row',
    marginTop: 25,
    // marginBottom: 20,
    justifyContent: 'space-between',
  },
  startStyle: {
    width: 70,
    height: 70,
  },
  description4: {
    color: '#073C7A',
    fontSize: 17,
    fontWeight: '600',
    // marginTop: 3,
    // marginLeft: 3
  },
  description5: {
    color: '#073C7A',
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 3,
    marginTop: 3,
  },
  descriptionBottom: {
    color: '#7689A2',
    fontSize: 13,
    fontWeight: '500',
    marginTop: 5,
    marginLeft: -10,
  },
  mainWrapperButton: {
    flexDirection: 'row',
    marginTop: 20,
  },
  buttonWrapper: {
    width: 80,
    height: 40,
    marginLeft: 6,
    backgroundColor: Colors.appHeaderColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  buttonText: {
    color: Colors.White,
    fontSize: 15,
  },
  buttonWrapper1: {
    width: 80,
    height: 40,
    backgroundColor: '#FFEAF0',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginLeft: 10,
  },
  buttonText1: {
    color: Colors.appHeaderColor,
    fontSize: 15,
  },
  aboutBottomWrapper: {
    width: widthScreen / 1.13,
    alignSelf: 'center',
  },
  aboutDetailsText: {
    marginTop: 20,
    fontSize: 13,
  },
  aboutDetailsText1: {
    fontSize: 15,
    marginTop: 15,
    color: Colors.appHeaderColor,
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  bottomWrapper44: {
    width: widthScreen,
    height: 100,
    backgroundColor: Colors.White,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomButtonWrapper: {
    flexDirection: 'row',
    width: widthScreen / 1.11,
    alignSelf: 'center',
  },
  downloadButton: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    backgroundColor: Colors.appHeaderColor,
  },
  downloadStyle: {
    width: 30,
    height: 30,
  },
  donateButton: {
    width: widthScreen / 1.4,
    height: 50,
    backgroundColor: Colors.appHeaderColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginLeft: 10,
  },
  donateText: {
    fontSize: 17,
    fontWeight: '500',
    color: Colors.White,
  },
  rightArrowStyle: {
    width: 30,
    height: 16,
    marginTop: 3,
    marginLeft: 10,
  },
  backContainer: {
    width: 40,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.16)',
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  
    marginLeft: 20,
    marginTop: 40,
  },
  indecatorStyle: {
    width: 30,
    height: 30,
    tintColor: Colors.White,
  },
  mainDescriptionWrapper: {
    marginBottom: 20,
    width: widthScreen / 1.12,
    alignSelf: 'center',
  },
  mainDescriptionWrapperBrear: {
    marginBottom: 20,
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: 40,
  },
  mainProfileWrapper: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 11,
    backgroundColor: '#DFE8FF',
  },
  mainProfileWrapper1: {
    width: 50,
    height: 50,
    borderRadius: 11,
  },
  textWrapper: {
    fontSize: 18,
    color: '#4890F0',
  },
  textWrapperHours: {
    fontSize: 15,
    color: '#6D7E92',
    marginTop: 15,
  },
  titleText: {
    fontSize: 18,
    color: '#05263D',
    fontWeight: '500',
    marginTop: 11,
    marginLeft: 15,
  },
  cardWrapper: {
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
    marginTop: 15,
  },
  cardData: {
    marginTop: 15,
    marginBottom: 20,
    width: '90%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 21,
    fontWeight: '500',
    color: '#05263D',
    marginTop: 10,
  },
  description: {
    fontSize: 13,
    fontWeight: '400',
    color: '#6D7E92',
  },
});
export default styles;
