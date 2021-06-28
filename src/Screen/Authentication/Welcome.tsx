import React from 'react';
import {
  View, Image, Text, TouchableOpacity, Platform, StyleSheet, Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as AppleAuthentication from 'expo-apple-authentication';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Images from '../../Styles/Images';
import * as Constants from '../../Constants';
import Colors from '../../Styles/Colors';
import Metrics from '../../Styles/Metrics';

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainConatiner}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <Image source={Images.backIcon} style={styles.indicatorStyle} />
      </TouchableOpacity>
      <View style={styles.mainContainer}>
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
            <Text style={styles.bottomTerm}>{Constants.TERM_CONDITION}</Text>
            <Text style={styles.bottomAnd}>{Constants.AND}</Text>
            <Text style={styles.bottomTerm1}>{Constants.PRIVACY}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    backgroundColor: 'white',
  },
  introFirstImage: {
    width: '65%',
    height: 250,
  },
  mainContainer: {
    flex: 0.55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 0.4,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 35,
    fontWeight: '700',
    alignSelf: 'center',
    color: Colors.black,
    marginBottom: 20,
  },
  indicatorStyle: {
    width: 30,
    height: 30,
    marginTop: '16%',
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
