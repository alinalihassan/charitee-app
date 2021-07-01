import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
  StyleSheet,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import Colors from '../../Styles/Colors';
import * as Constants from '../../Constants';
import AuthContext from '../../Utils/AuthContext';

const Login = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const { signIn } = React.useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <View style={styles.mainHeader}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <MaterialIcons name="chevron-left" size={32} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Login</Text>
        </View>

        <View style={styles.form}>
          <TextInput
            style={styles.emailInput}
            label="Email"
            value={email}
            onChangeText={setEmail}
            mode="outlined"
            autoCapitalize="none"
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
            style={styles.passwordInput}
            label="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
            autoCapitalize="none"
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
            onPress={() => {
              navigation.navigate('');
            }}
          >
            <Text style={styles.forgotText}>{Constants.FORGOT_PASSWORD}</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.loginButton}
            onPress={() => {
              if (signIn) {
                signIn(email, password);
              }
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.buttonText}>{Constants.LOGIN}</Text>
              <MaterialIcons name="chevron-right" size={24} color="white" />
            </View>
          </TouchableOpacity>

          <View style={styles.bottomWrapper}>
            <Text style={styles.bottomText1}>
              {Constants.DONT_HAVE_ACCOUNT}
            </Text>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Register');
              }}
            >
              <Text style={styles.loginText}>{Constants.SIGN_UP}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  mainHeader: {
    flexDirection: 'row',
    display: 'flex',
    marginTop: 25,
    width: widthScreen - 48,
    marginHorizontal: 24,
    alignSelf: 'center',
  },
  title: {
    position: 'absolute',
    width: widthScreen - 48,
    textAlign: 'center',
    alignSelf: 'center',
    fontSize: 21,
    fontWeight: '500',
    color: '#000',
    zIndex: -1,
  },
  form: {
    width: widthScreen - 48,
    marginHorizontal: 24,
    alignSelf: 'center',
    marginTop: 128,
  },
  emailInput: {
    height: 50,
    width: widthScreen - 48,
    marginHorizontal: 24,
    alignSelf: 'center',
  },
  passwordInput: {
    height: 50,
    width: widthScreen - 48,
    marginHorizontal: 24,
    alignSelf: 'center',
    marginTop: 16,
  },
  loginButton: {
    marginTop: 20,
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
  bottomWrapper: {
    marginTop: 64,
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
    padding: 10,
  },
  forgotText: {
    fontSize: 15,
    color: Colors.appHeaderColor,
    textAlign: 'right',
    marginTop: 8,
  },
});

export default Login;
