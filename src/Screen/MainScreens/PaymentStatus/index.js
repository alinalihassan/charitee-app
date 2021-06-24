import React, { Component } from 'react';
import { View, Image, Text, TouchableOpacity, Share } from 'react-native';
import Images from '../../../Styles/Images';
import Styles from './Styles';

class PaymentStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.moved = false;
  }

  onShare = async () => {
    try {
      const result = await Share.share({
        message: `Check it out! I just donated 10 € to help with Oxygen for Varuna`,
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {
      console.error(error.message);
    }
  };

  render() {
    return (
      <View style={Styles.mainConatiner}>
        <View style={Styles.mainContainer}>
          <Image source={Images.Header} style={Styles.introFirstImage} />

          <Text style={Styles.bottomTextHeader}>{'Anastasia! '}</Text>
          <Text style={Styles.description}>
            {'Thank you very much for your support'}
          </Text>

          <View style={Styles.mainWrapper}>
            <Image
              source={Images.EmojiPay}
              style={Styles.mainProfileWrapper1}
            />
            <Text style={Styles.description1}>{'10 €'}</Text>
          </View>

          {/* 1 */}
          <TouchableOpacity onPress={this.onShare}>
            <View style={Styles.showPaymentWrapper}>
              <Text style={Styles.description2}>
                {
                  'Please share it with your friends to help us reach many hearts.'
                }
              </Text>
              <View style={Styles.separator} />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  width: '100%',
                  alignSelf: 'center',
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    marginLeft: 15,
                    marginBottom: 15,
                  }}>
                  <Image
                    source={Images.start}
                    style={Styles.mainProfileWrapper}
                  />

                  <Text style={Styles.titleText}>{'Share with friends'}</Text>
                </View>
                <Image source={Images.right} style={Styles.rightArrowStyle} />
              </View>
            </View>
          </TouchableOpacity>

          {/* Button */}
          <TouchableOpacity
            style={Styles.donateButton}
            onPress={() => {
              this.props.navigation.navigate('main');
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={Styles.buttonText}>{'Back to Main Page'}</Text>
              <Image source={Images.right} style={Styles.rightArrowStyle1} />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default PaymentStatus;
