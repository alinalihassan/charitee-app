import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, Platform } from 'react-native';
import Images from '../../../Styles/Images';
import * as Constants from '../../../Constants';
import Styles from './Styles';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.moved = false;
  }

  render() {
    return (
      <View style={Styles.mainConatiner}>
        <TouchableOpacity
          onPress={() => {
            this.props.navigation.navigate('ThirdScreen');
          }}>
          <Image source={Images.backIcon} style={Styles.indecatorStyle} />
        </TouchableOpacity>
        <View style={Styles.mainContainer}>
          <Text style={Styles.titleText}>{'Welcome'}</Text>
          <Image source={Images.homeLogo} style={Styles.introFirstImage} />
        </View>
        <View style={Styles.bottomContainer}>
          <TouchableOpacity
            style={Styles.donateButton}
            onPress={() => {
              this.props.navigation.navigate('Register');
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Image source={Images.gmail} style={Styles.rightArrowStyle} />
              <Text style={Styles.donateText}>{'Email'}</Text>
            </View>
          </TouchableOpacity>
          {Platform.OS === 'ios' && (
            <TouchableOpacity
              style={Styles.appleButton}
              onPress={() => {
                this.props.navigation.navigate('');
              }}>
              <View style={{ flexDirection: 'row' }}>
                <Image source={Images.Apple} style={Styles.appleStyle} />
                <Text style={Styles.donateText1}>{'Continue with Apple'}</Text>
              </View>
            </TouchableOpacity>
          )}

          <View style={Styles.bottomWrapper}>
            <Text style={Styles.bottomText1}>{Constants.WELCOME_BOOTOM_1}</Text>
            <View style={{ flexDirection: 'row', marginTop: 5 }}>
              <Text style={Styles.bottomTerm}>{Constants.TERM_CONDITION}</Text>
              <Text style={Styles.bottomAnd}>{Constants.AND}</Text>
              <Text style={Styles.bottomTerm1}>{Constants.PRIVACY}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

export default Welcome;
