import React, { Component } from 'react';
import {
  View,
  Image,
  Platform,
  Text,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from 'react-native';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import Styles from './Styles';

class DonationPayment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.moved = false;
  }

  render() {
    const { email, password } = this.state;
    return (
      <>
        <SafeAreaView style={Styles.mainContainer}>
          <View style={Styles.mainHeader}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Donate');
              }}
            >
              <Image source={Images.backIcon} style={Styles.indecatorStyle} />
            </TouchableOpacity>
            <Text style={Styles.donateText}>One-time payment</Text>
            <Text style={Styles.donateText1}>ok</Text>
          </View>

          <View style={Styles.mainScreenContainer}>
            <Text style={Styles.headerText}>Enter the donation amount</Text>
            <TextInput
              style={Styles.inputWrapper1}
              placeholder="10 |€"
              placeholderTextColor={Colors.black}
              value={password}
              onChangeText={(text) => this.setState({ password: text })}
              keyboardType="numeric"
            />
            <View
              style={{ flexDirection: 'row', marginTop: 20, marginBottom: 20 }}
            >
              <Image source={Images.Ic} style={Styles.mainProfileWrapper1} />

              <Text style={Styles.titleText}>
                Thank you for your support
              </Text>
            </View>

            <TouchableOpacity
              style={Styles.donateButton}
              onPress={() => {
                this.props.navigation.navigate('CardSelect');
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <Text style={Styles.buttonText}>{'Pay credit card '}</Text>
                <Image source={Images.right} style={Styles.rightArrowStyle} />
              </View>
            </TouchableOpacity>

            {Platform.OS == 'ios' && (
              <TouchableOpacity style={Styles.appleButton}>
                <View style={{ flexDirection: 'row' }}>
                  <Image source={Images.Apple} style={Styles.appleStyle} />
                  <Text style={Styles.donateText1}>Pay</Text>
                </View>
              </TouchableOpacity>
            )}
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default DonationPayment;
