import React, { Component } from 'react';
import {
  View, Image, Text, Dimensions, StyleSheet,
} from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import * as SecureStore from 'expo-secure-store';
import { MaterialIcons } from '@expo/vector-icons';
import Metrics from '../../Styles/Metrics';
import Colors from '../../Styles/Colors';
import * as Constants from '../../Constants';
import ImageFinance from '../../../assets/Finances.png';
import MagnifyingGlass from '../../../assets/magnifyingGlass.png';
import Globe from '../../../assets/Globe.png';

type OnboardingItem = {
  key: number,
  title: string,
  text: string,
  image: any,
}

const slides: OnboardingItem[] = [
  {
    key: 1,
    title: Constants.ONBOARDING_FIRST_TITLE,
    text: Constants.ONBOARDING_FIRST_DESCRIPTION,
    image: ImageFinance,
  },
  {
    key: 2,
    title: Constants.ONBOARDING_SECOND_TITLE,
    text: Constants.ONBOARDING_SECOND_DESCRIPTION,
    image: MagnifyingGlass,
  },
  {
    key: 3,
    title: Constants.ONBOARDING_THIRD_TITLE,
    text: Constants.ONBOARDING_THIRD_DESCRIPTION,
    image: Globe,
  },
];

type OnboardingProps = {
  slider: any
}

type OnboardingState = {
  next: number
}

export default class ViewPagerPage extends Component<OnboardingProps, OnboardingState> {
  renderItem = ({ item } : {item: OnboardingItem}) => (
    <View style={styles.mainConatiner}>
      <View style={styles.mainContainer}>
        <Image source={item.image} style={styles.onboardingImage} />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.titleText}>{item.title}</Text>
        <Text style={styles.descriptionText}>{item.text}</Text>
      </View>
    </View>
  );

  renderNextButton = () => (
    <View style={styles.donateButton}>
      <Text style={styles.donateText}>{Constants.ONBOARDING_BUTTON_CONTINUE}</Text>
      <MaterialIcons name="chevron-right" size={24} color="white" style={styles.rightArrowStyle} />
    </View>
  );

  renderDoneButton = () => (
    <View style={styles.donateButton}>
      <Text style={styles.donateText}>{Constants.ONBOARDING_BUTTON_GET_STARTED}</Text>
      <MaterialIcons name="chevron-right" size={24} color="white" style={styles.rightArrowStyle} />
    </View>
  );

  onDone = async () => {
    await SecureStore.setItemAsync('onboardingDone', 'true');
    this.props.navigation.navigate('Welcome');
  }

  render() {
    return (
      <AppIntroSlider
        renderItem={this.renderItem}
        data={slides}
        bottomButton
        renderNextButton={this.renderNextButton}
        renderDoneButton={this.renderDoneButton}
        onDone={this.onDone}
        dotStyle={{ backgroundColor: '#ECEBED' }}
        activeDotStyle={{ backgroundColor: Colors.appHeaderColor }}
      />
    );
  }
}

const widthScreen = Dimensions.get('window').width;
const styles = StyleSheet.create({
  mainConatiner: {
    flex: 1,
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    backgroundColor: 'white',
  },
  mainContainer: {
    flex: 0.6,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomContainer: {
    flex: 0.4,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 26,
    fontWeight: '700',
    alignSelf: 'center',
    color: Colors.black,
  },
  descriptionText: {
    fontSize: 17,
    fontWeight: '400',
    color: Colors.textColor,
    marginTop: 24,
    textAlign: 'center',
    marginHorizontal: 32,
  },
  onboardingImage: {
    width: '100%',
    height: 320,
  },
  donateButton: {
    flexDirection: 'row',
    width: widthScreen - 48,
    marginHorizontal: 24,
    height: 55,
    backgroundColor: Colors.appHeaderColor,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    alignSelf: 'center',
  },
  donateText: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.White,
  },
  rightArrowStyle: {
    marginTop: 2,
  },
});
