import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../../Styles/Colors';

const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  mainConatiner1: {
    backgroundColor: Colors.White,
  },
  mainConatiner: {
    flex: 1,
    backgroundColor: '#F2F5FC',
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
  headerContainer1:{
    width: widthScreen / 1.12,
    alignSelf: 'center',
    marginTop: '7%',
    marginBottom: 15,
  },
  titleText: {
    fontSize: 35,
    fontWeight: '700',
    color: Colors.black,
  },
  titleText1: {
    fontSize: 27,
    fontWeight: '500',
    color: Colors.black,
    textAlign: 'center',
  },
  emailWrapper: {
    marginTop: 20,
    flexDirection: 'row',
    borderColor: '#F2F5FC',
    borderRadius: 12,
    backgroundColor: '#F2F5FC',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: widthScreen / 1.1,
  },
  emailInput: {
    marginLeft: 4,
    flex: 1,
    fontSize: 14,
    margin: 10,
  },
  inputImageLock: {
    width: 24,
    height: 24,
    marginLeft: 14,
  },
  mainWrapperButton: {
    flexDirection: 'row',
    marginTop: 20,
    width: widthScreen / 1.1,
    alignSelf: 'center',
  },
  buttonWrapper: {
    paddingVertical: 10,
    paddingHorizontal: 14,
    backgroundColor: Colors.appHeaderColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    marginLeft: 6,
  },
  buttonText: {
    color: Colors.White,
    fontSize: 14,
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
  mainScrollWrapper: {
    marginTop: 15,
    marginBottom: 15,
  },
  filterStyle: {
    width: 100,
    height: 100,
    position: 'absolute',
    alignSelf: 'flex-end',
    marginBottom: 0,
    marginRight: 0,
    bottom: 0,
    right: 0,
  },
  notifTag1: {
    height: 25,
    width: 25,
    position: 'absolute',
    bottom: 57,
    right: 10,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2B6FC7',
  },
  tagTextStyle: {
    fontSize: 14,
    color: Colors.White,
  },

});

export default styles;
