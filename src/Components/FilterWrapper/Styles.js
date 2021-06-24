import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';
const widthScreen = Dimensions.get('window').width;
const heightScreen = Dimensions.get('window').height;
const styles = StyleSheet.create({
  modelContainer: {
    height: '100%',
    margin: 0,
    justifyContent: 'flex-start',
  },
  modelContainerWrapper: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    height: Dimensions.get('screen').height / 1 - 150,
  },
  mainWrapper: {
    width: widthScreen / 1.15,
    alignSelf: 'center',
  },
  mainHeader: {
    marginTop: 15,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 25,
    fontWeight: '600',
    marginLeft: 25,
  },
  cancelText: {
    fontSize: 17,
    fontWeight: '400',
    color: '#4890F0',
    marginTop: 7,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#DADFE6',
  },
  separator1: {
    borderBottomWidth: 1,
    borderBottomColor: '#DADFE6',
    marginTop: '15%',
  },
  mainContentText: {
    fontSize: 17,
    fontWeight: '500',
    color: '#6D7E92',
    marginTop: 30,
  },
  categoryContent: {
    flexDirection: 'row',
    marginTop: 25,
  },
  checkBoxText: {
    color: '#05263D',
    fontSize: 18,
    fontWeight: '500',
    marginLeft: 20,
    marginTop: 5,
  },
  donateButton: {
    width: widthScreen / 1.6,
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
  buttonWrapper1: {
    width: 90,
    height: 50,
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
  bottomButtonWrapper: {
    flexDirection: 'row',
    width: widthScreen / 1.11,
    alignSelf: 'center',
    marginTop: 25,
  },
  dropDownWrapper: {
    width: widthScreen / 1.2,
    alignSelf: 'center',
    marginTop: 20,
    borderWidth: 1,
    borderRadius: 12,
    borderColor: '#DADFE6',
    flexDirection: 'row',
  },
});
export default styles;
