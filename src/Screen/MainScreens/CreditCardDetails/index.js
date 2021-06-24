import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import ToggleSwitch from 'toggle-switch-react-native';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import * as Constants from '../../../Constants';
import Styles from './Styles';
import Modal from 'react-native-modal';

class CreditCardDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paymentSelect: null,
      cardNumber: '',
      CVC: '',
      expiryDate: '',
      toogleValue: false,
      showPaymentModel: false,
    };
  }

  render() {
    const { cardNumber, CVC, expiryDate, toogleValue, showPaymentModel } =
      this.state;
    return (
      <>
        <SafeAreaView style={Styles.mainConatiner}>
          <View style={Styles.mainHeader}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('CardSelect');
              }}>
              <Image source={Images.backIcon} style={Styles.indecatorStyle} />
            </TouchableOpacity>
            <Text style={Styles.donateText}>{'Credit card details'}</Text>
            <Text style={Styles.donateText1}>{'ok'}</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              marginTop: '15%',
              marginBottom: 20,
              justifyContent: 'center',
            }}>
            <View style={Styles.mainProfileWrapper}>
              <Image
                source={Images.protection}
                style={Styles.mainProfileWrapper1}
              />
            </View>

            <Text style={Styles.titleText}>{'Card details are secure'}</Text>
          </View>

          <View style={Styles.mainScreenConatiner}>
            <TextInput
              style={Styles.inputWrapper}
              label="Card number"
              placeholder="Enter a 16 digit number"
              value={cardNumber}
              onChangeText={(text) => this.setState({ cardNumber: text })}
              mode="outlined"
              // right={<Image source={Images.Icon_color} style={{ width: 25, height: 25 }} />}
              right={
                <TextInput.Icon
                  name={
                    cardNumber.length > 0 ? Images.Delete : Images.Icon_color
                  }
                  color={cardNumber.length > 0 ? '#B3BDCB' : '#4890F0'}
                  style={{ marginTop: 12 }}
                />
              }
              theme={{
                roundness: 12,
                colors: {
                  placeholder: '#B3BDCB',
                  marginBottom: 15,
                  text: '#000000',
                  primary: cardNumber.length > 16 ? '#E23930' : '#4890F0',
                  underlineColor: Colors.borderColor,
                  background: '#ffffff',
                  outlineColor: '#4890F0',
                },
              }}
            />

            <View
              style={{
                flexDirection: 'row',
                marginTop: 25,
                justifyContent: 'space-between',
              }}>
              <TextInput
                style={Styles.inputWrapper1}
                label="Expiration date"
                placeholder="Expiration date"
                value={expiryDate}
                onChangeText={(text) => this.setState({ expiryDate: text })}
                mode="outlined"
                theme={{
                  roundness: 12,
                  colors: {
                    placeholder: '#B3BDCB',
                    marginBottom: 15,
                    text: '#000000',
                    primary: '#52A2F0',
                    underlineColor: Colors.borderColor,
                    background: '#ffffff',
                    outlineColor: '#4890F0',
                  },
                }}
              />
              <TextInput
                style={Styles.inputWrapper1}
                label="CVV"
                placeholder="CVV"
                value={CVC}
                onChangeText={(text) => this.setState({ CVC: text })}
                mode="outlined"
                right={
                  <TextInput.Icon
                    name={Images.information}
                    color={'#4890F0'}
                    style={{ marginTop: 15 }}
                  />
                }
                theme={{
                  roundness: 12,
                  colors: {
                    placeholder: '#B3BDCB',
                    marginBottom: 15,
                    text: '#000000',
                    primary: '#52A2F0',
                    underlineColor: Colors.borderColor,
                    background: '#ffffff',
                    outlineColor: '#4890F0',
                  },
                }}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                marginTop: 50,
              }}>
              <ToggleSwitch
                isOn={toogleValue}
                onColor={Colors.appHeaderColor}
                offColor="#FEEFEF"
                label=""
                labelStyle={{ color: 'black', fontWeight: '900' }}
                size="medium"
                onToggle={(isOn) => {
                  this.setState({ toogleValue: isOn, showPaymentModel: isOn });
                }}
              />

              <Text style={Styles.titleTextSave}>
                {'Link your card after payment'}
              </Text>
            </View>
          </View>

          <TouchableOpacity
            style={Styles.donateButton}
            // PaymentStatus
            onPress={() => {
              this.props.navigation.navigate('PaymentStatus');
            }}>
            <View style={{ flexDirection: 'row' }}>
              <Text style={Styles.buttonText}>{'Donate €10 '}</Text>
              <Image source={Images.right} style={Styles.rightArrowStyle1} />
            </View>
          </TouchableOpacity>

          {
            <Modal
              animationInTiming={300}
              animationOutTiming={200}
              animationIn="flipInY"
              animationOut="flipOutY"
              backdropOpacity={0.1}
              avoidKeyboard={true}
              transparent={true}
              isVisible={showPaymentModel}
              onBackdropPress={() => {
                this.setState({ showPaymentModel: false });
              }}
              style={{ flex: 1, justifyContent: 'flex-end', marginBottom: 30 }}>
              <View style={Styles.modalCont1}>
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ showPaymentModel: false });
                  }}>
                  <Image
                    source={Images.dismiss}
                    style={{
                      width: 25,
                      height: 25,
                      alignSelf: 'flex-end',
                      marginRight: 15,
                      marginTop: 10,
                    }}
                  />
                </TouchableOpacity>
                <Image
                  source={Images.CVV}
                  style={{
                    width: 70,
                    height: 60,
                    alignSelf: 'center',
                    marginTop: 10,
                  }}
                />

                <Text style={Styles.cvvText}>{'CVV'}</Text>

                <Text style={Styles.titleTextSave11}>
                  {Constants.CVVDESCRIPTION}
                </Text>
                <TouchableOpacity
                  style={Styles.cvvButton}
                  // PaymentStatus
                  onPress={() => {
                    this.props.navigation.navigate('PaymentStatus');
                  }}>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={Styles.buttonText}>{'Ok'}</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </Modal>
          }
        </SafeAreaView>
      </>
    );
  }
}

export default CreditCardDetails;
