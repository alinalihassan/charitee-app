import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, Dimensions, StyleSheet } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import Metrics from '../../Styles/Metrices';
import Images from '../../Styles/Images';
import Colors from '../../Styles/Colors';
import * as Constants from '../../Constants';
import { RefObject } from 'react';

const slides = [
  {
    key: 1,
    title: Constants.ANYWHERE_AT_ANYTIME,
    text: Constants.ANYWHERE_DESCRIPTION,
    image: Images.Finances,
    backgroundColor: 'white',
    button: Constants.CONTINUE,
  },
  {
    key: 2,
    title: Constants.ANYWHERE_AT_ANYTIME,
    text: Constants.ANYWHERE_DESCRIPTION,
    image: Images.Searching_Looking,
    backgroundColor: 'white',
    button: Constants.CONTINUE,
  },
  {
    key: 3,
    title: Constants.ANYWHERE_AT_ANYTIME,
    text: Constants.ANYWHERE_DESCRIPTION,
    image: Images.Globe,
    backgroundColor: 'white',
    button: Constants.GET_STARTED,
  },
];

type OnboardingProps = {
  slider: RefObject<unknown>,
  navigation: any
}

type OnboardingState = {
  showRealApp: boolean,
  next: number
}

export default class ViewPagerPage extends Component<OnboardingProps, OnboardingState> {
  constructor(props: OnboardingProps) {
    super(props);
    props.slider = React.createRef();
    this.state = {
      showRealApp: false,
      next: 0,
    };
  }

  _renderItem = ({ item }) => {
    return (
      <View style={styles.mainConatiner}>
        <View style={styles.mainContainer}>
          <Image source={item.image} style={styles.introSecondImage} />
        </View>
        <View style={styles.bottomContainer}>
          <Text style={styles.titleText}>{item.title}</Text>
          <Text style={styles.descriptionText1}>{item.text}</Text>
        </View>
      </View>
    );
  };
  goNext = () => {
    this.setState({ next: this.state.next + 1 });
    this.props.slider?.goToSlide(this.state.next + 1, true);
  };
  _renderNextButton = () => {
    return (
      <TouchableOpacity
        style={styles.donateButton}
        onPress={() => this.goNext()}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.donateText}>{Constants.CONTINUE}</Text>
          <Image source={Images.right} style={styles.rightArrowStyle} />
        </View>
      </TouchableOpacity>
    );
  };
  _renderDoneButton = () => {
    return (
      <TouchableOpacity
        style={styles.donateButton}
        onPress={() => {
          this.props.navigation.navigate('Welcome');
        }}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.donateText}>{Constants.GET_STARTED}</Text>
          <Image source={Images.right} style={styles.rightArrowStyle} />
        </View>
      </TouchableOpacity>
    );
  };
  changeSlide = (e) => {
    this.setState({ next: e });
  };
  render() {
    return (
      <AppIntroSlider
        ref={(ref) => (this.slider = ref)}
        onSlideChange={(e) => this.changeSlide(e)}
        renderItem={this._renderItem}
        data={slides}
        onDone={this._onDone}
        bottomButton={true}
        renderNextButton={this._renderNextButton}
        renderDoneButton={this._renderDoneButton}
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
  introFirstImage: {
    width: '75%',
    height: 300,
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
    alignSelf: 'center',
    color: Colors.textColor,
    marginTop: '10%',
    textAlign: 'center',
    width: widthScreen / 1.2,
  },
  descriptionText1: {
    fontSize: 17,
    fontWeight: '400',
    alignSelf: 'center',
    color: Colors.textColor,
    marginTop: '10%',
    textAlign: 'center',
    width: '70%',
  },
  descriptionText2: {
    fontSize: 17,
    fontWeight: '400',
    alignSelf: 'center',
    color: Colors.textColor,
    marginTop: '10%',
    width: '45%',
    textAlign: 'center',
  },
  descriptionText3: {
    fontSize: 17,
    fontWeight: '400',
    alignSelf: 'center',
    color: Colors.textColor,
    textAlign: 'center',
    width: '70%',
  },
  indecatorStyle: {
    width: 70,
    height: 9,
    marginTop: '10%',
  },
  introSecondImage: {
    width: '95%',
    height: 320,
  },
  introThirdImage: {
    width: '78%',
    height: 340,
  },
  buttoWrapper: {
    marginTop: '18%',
    width: '60%',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderRadius: 12,
    backgroundColor: Colors.appHeaderColor,
  },
  buttonText: {
    fontSize: 17,
    fontWeight: '700',
  },
  donateButton: {
    width: widthScreen / 1.12,
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
    width: 27,
    height: 13,
    marginTop: 6,
    marginLeft: 10,
  },
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 4,
  },
  paginationDots: {
    height: 16,
    margin: 16,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});