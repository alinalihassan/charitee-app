import React from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import * as Constants from '../../Constants';
import AuthContext from '../../Utils/AuthContext';

const Register = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signIn } = React.useContext(AuthContext);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainConatiner}>
      <View style={styles.mainHeader}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Welcome');
          }}
        >
          <Image source={Images.backIcon} style={styles.indecatorStyle} />
        </TouchableOpacity>
        <Text style={styles.donateText}>Register</Text>
        <Text style={styles.donateText1}>ok</Text>
      </View>

      <View style={styles.mainScreenConatiner}>
        <TextInput
          style={styles.inputWrapper}
          label="Email"
          value={email}
          onChangeText={setEmail}
          mode="outlined"
          theme={{
            roundness: 12,
            colors: {
              placeholder: '#B3BDCB',
              text: '#000000',
              primary: '#52A2F0',
              background: '#ffffff',
            },
          }}
        />

        <TextInput
          style={styles.inputWrapper1}
          label="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
          mode="outlined"
          theme={{
            roundness: 12,
            colors: {
              placeholder: '#B3BDCB',
              text: '#000000',
              primary: '#52A2F0',
              background: '#ffffff',
            },
          }}
        />

        <TouchableOpacity
          style={styles.donateButton}
          onPress={() => {
            signIn(email, password);
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.buttonText}>{Constants.SIGN_UP}</Text>
            <Image source={Images.right} style={styles.rightArrowStyle} />
          </View>
        </TouchableOpacity>

        <View style={styles.bottomWrapper}>
          <Text style={styles.bottomText1}>
            {Constants.ALREADY_HAVE_ACCOUNT}
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Login');
            }}
          >
            <Text style={styles.loginText}>{Constants.LOGIN}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainHeader: {
    flexDirection: 'row',
    marginTop: 25,
    width: widthScreen - 48,
    marginHorizontal: 24,
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
    width: widthScreen - 48,
    marginHorizontal: 24,
    alignSelf: 'center',
    marginTop: '30%',
  },
  inputWrapper: {
    height: 50,
    width: widthScreen - 48,
    marginHorizontal: 24,
    alignSelf: 'center',
  },
  inputWrapper1: {
    height: 50,
    width: widthScreen - 48,
    marginHorizontal: 24,
    alignSelf: 'center',
    marginTop: 16,
  },
  donateButton: {
    marginTop: 48,
    width: widthScreen - 48,
    marginHorizontal: 24,
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

export default Register;
