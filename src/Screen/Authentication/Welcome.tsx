import React from 'react';
import {
  View, Image, Text, TouchableOpacity, Platform, StyleSheet, Dimensions, SafeAreaView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as AppleAuthentication from 'expo-apple-authentication';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import * as Linking from 'expo-linking';
import Images from '../../Styles/Images';
import * as Constants from '../../Constants';
import Colors from '../../Styles/Colors';
import Metrics from '../../Styles/Metrics';

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.titleText}>Welcome</Text>
        <Image source={Images.homeLogo} style={styles.introFirstImage} />
      </View>
      <View style={styles.bottomContainer}>
        <TouchableOpacity
          style={styles.donateButton}
          onPress={() => {
            navigation.navigate('Register');
          }}
        >
          <View style={{ flexDirection: 'row' }}>
            <MaterialCommunityIcons name="gmail" size={24} color="white" />
            <Text style={styles.donateText}>Email</Text>
          </View>
        </TouchableOpacity>
        {Platform.OS === 'ios' && (
          <AppleAuthentication.AppleAuthenticationButton
            buttonType={AppleAuthentication.AppleAuthenticationButtonType.SIGN_IN}
            buttonStyle={AppleAuthentication.AppleAuthenticationButtonStyle.BLACK}
            cornerRadius={12}
            style={styles.appleButton}
            onPress={async () => {
              try {
                const credential = await AppleAuthentication.signInAsync({
                  requestedScopes: [
                    AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
                    AppleAuthentication.AppleAuthenticationScope.EMAIL,
                  ],
                });
                console.log(credential);
              // signed in
              } catch (e) {
                if (e.code === 'ERR_CANCELED') {
                // handle that the user canceled the sign-in flow
                } else {
                // handle other errors
                }
              }
            }}
          />
        )}

        <View style={styles.bottomWrapper}>
          <Text style={styles.bottomText1}>{Constants.WELCOME_BOOTOM_1}</Text>
          <View style={{ flexDirection: 'row', marginTop: 5 }}>
            <Text
              onPress={() => Linking.openURL(Constants.URL_TERMS_OF_SERVICE)}
              style={styles.bottomTerm}
            >
              {Constants.TERM_CONDITION}
            </Text>
            <Text style={styles.bottomAnd}>{Constants.AND}</Text>
            <Text
              onPress={() => Linking.openURL(Constants.URL_PRIVACY_POLICY)}
              style={styles.bottomTerm1}
            >
              {Constants.PRIVACY}
            </Text>
          </View>
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
  introFirstImage: {
    width: '65%',
    height: 250,
  },
  headerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 36,
    fontWeight: '700',
    alignSelf: 'center',
    color: Colors.black,
    marginBottom: 20,
  },
  backButtonStyle: {
    marginTop: 20,
    marginLeft: 20,
  },
  donateButton: {
    width: widthScreen - 48,
    marginHorizontal: 24,
    height: 55,
    backgroundColor: Colors.appHeaderColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
  },
  appleButton: {
    marginTop: 10,
    width: widthScreen - 48,
    marginHorizontal: 24,
    height: 55,
  },
  donateText: {
    fontSize: 21,
    fontWeight: '500',
    color: Colors.White,
    marginLeft: 10,
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

export default Welcome;
