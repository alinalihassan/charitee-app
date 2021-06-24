import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../Styles/Colors';

const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  safeViewStyle: {
    flex: 1,
    backgroundColor: '#F7F8FA',
  },
  safeViewStyle1: {
    backgroundColor: Colors.White,
  },
  mainHeader: {
    backgroundColor: Colors.White,
  },
  headerContainer: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: '10%',
    marginBottom: 15,
  },
  mainHeader1: {
    flexDirection: 'row',
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
  mainDescriptionWrapper: {
    marginBottom: 20,
    width: widthScreen / 1.12,
    alignSelf: 'center',
  },
  aboutDetailsText: {
    marginTop: 20,
    fontSize: 14,
  },
  mainImage: {
    width: widthScreen / 1.12,
    height: 180,
    borderRadius: 12,
    marginTop: 20,
    alignSelf: 'center',
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
  donateText2: {
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
    marginBottom: -60,
    marginLeft: 20,
    zIndex: 1,
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
  titleText: {
    fontSize: 18,
    color: '#05263D',
    fontWeight: '500',
    marginTop: 11,
    marginLeft: 15,
  },
  textWrapperHours: {
    fontSize: 15,
    color: '#6D7E92',
    marginTop: 15,
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
