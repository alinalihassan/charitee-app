import React, { Component } from 'react';
import {
  View, Image, Text, TouchableOpacity,
} from 'react-native';
import Images from '../../../Styles/Images';
import Styles from './Styles';

class Donate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.moved = false;
  }

  render() {
    return (
      <View style={Styles.mainContainer}>
        <View style={Styles.headerWrapper}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('ProductDescriptionAbout');
            }}
          >
            <Image source={Images.backIcon} style={Styles.indecatorStyle} />
          </TouchableOpacity>
          <Text style={Styles.titleText1}>Donate</Text>
        </View>
        <View style={Styles.mainContainer}>
          <Image source={Images.Header} style={Styles.introFirstImage} />

          <Text style={Styles.bottomTextHeader}>Monthly payment</Text>
          <Text style={Styles.description}>
            You can change the supported amount or cancel your subscription at any time.
          </Text>
        </View>
        <View style={Styles.bottomContainer}>
          {/* 1 */}
          <TouchableOpacity>
            <View style={Styles.showPaymentWrapper}>
              <View style={{ flexDirection: 'row', marginLeft: 15 }}>
                <View style={Styles.mainProfileWrapper}>
                  <Image
                    source={Images.Emoji}
                    style={Styles.mainProfileWrapper1}
                  />
                </View>

                <Text style={Styles.titleText}>Subscribe</Text>
              </View>
              <Image source={Images.right} style={Styles.rightArrowStyle} />
            </View>
          </TouchableOpacity>
          {/* 2 */}
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.navigate('DonationPayment');
            }}
          >
            <View style={Styles.showPaymentWrapper}>
              <View style={{ flexDirection: 'row', marginLeft: 15 }}>
                <View style={Styles.mainProfileWrapper}>
                  <Image
                    source={Images.EmojiPay}
                    style={Styles.mainProfileWrapper1}
                  />
                </View>

                <Text style={Styles.titleText}>One-time payment</Text>
              </View>
              <Image source={Images.right} style={Styles.rightArrowStyle} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Donate;
