import { StyleSheet, Dimensions } from 'react-native';
import Colors from '../../Styles/Colors';

const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
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
    marginBottom: 20,
  },
  mainImage: {
    width: '100%',
    height: 150,
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
  },
  description: {
    fontSize: 13,
    fontWeight: '400',
    color: '#6D7E92',
    marginTop: 7,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#DADFE6',
    marginTop: 10,
    marginBottom: 10,
  },
  dataContentWrapper: {
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  description3: {
    color: '#073C7A',
    fontSize: 17,
    fontWeight: '600',
    marginTop: 3,
    marginLeft: 3,
  },
  description1: {
    color: '#4B97FC',
    fontSize: 20,
    fontWeight: '700',
  },
  imageTag: {
    width: 50,
    height: 15,
  },
  labelContainer: {
    width: 90,
    height: 30,
    backgroundColor: 'rgba(0, 5, 21, 0.24)',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelContainer1: {
    width: 90,
    height: 30,
    backgroundColor: 'rgba(0, 5, 21, 0.24)',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 7,
  },
});
export default styles;
