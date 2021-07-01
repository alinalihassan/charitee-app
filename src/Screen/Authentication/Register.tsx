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

const Register = () => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const { signUp } = React.useContext(AuthContext);
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.mainHeader}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <MaterialIcons name="chevron-left" size={32} color="black" />
        </TouchableOpacity>
        <Text style={styles.title}>Register</Text>
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

        <TouchableOpacity
          style={styles.mainButton}
          onPress={() => {
            if (signUp) {
              signUp(email, password);
            }
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.buttonText}>{Constants.SIGN_UP}</Text>
            <MaterialIcons name="chevron-right" size={24} color="white" />
          </View>
        </TouchableOpacity>

        <View style={styles.bottomWrapper}>
          <Text style={styles.bottomText}>
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
  mainContainer: {
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
  mainButton: {
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
  bottomWrapper: {
    marginTop: 64,
  },
  bottomText: {
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
