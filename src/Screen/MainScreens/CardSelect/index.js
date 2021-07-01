import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import * as Constants from '../../../Constants';
import Styles from './Styles';

class CardSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [
        {
          id: 1,
          logo: Images.Logo_bank,
          name: '',
        },
        {
          id: 2,
          logo: Images.Logo_bank2,
          name: '',
        },
        {
          id: 3,
          logo: Images.Logo_bank3,
          name: '',
        },
        {
          id: 4,
          logo: Images.Logo_bank4,
          name: '',
        },
        {
          id: 5,
          logo: Images.Logo_bank5,
          name: '',
        },
        {
          id: 6,
          logo: Images.Logo_bank,
          name: 'Payment card',
        },
      ],
      paymentSelect: null,
    };
  }

  selectOption = (value) => {
    if (value === this.state.paymentSelect) {
      this.setState({ paymentSelect: null });
    } else {
      this.setState({ paymentSelect: value });
    }
  };

  render() {
    const { cardData, paymentSelect } = this.state;
    return (
      <>
        <SafeAreaView style={Styles.mainContainer}>
          <View style={Styles.mainHeader}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('DonationPayment');
              }}
            >
              <Image source={Images.backIcon} style={Styles.indecatorStyle} />
            </TouchableOpacity>
            <Text style={Styles.donateText}>Credit Card</Text>
            <Text style={Styles.donateText1}>ok</Text>
          </View>
          <ScrollView>
            <View style={Styles.paymentContainer}>
              <Text style={Styles.headerText}>Choose payment type:</Text>

              {cardData.length > 0
                && cardData.map((data, index) => (
                  <>
                    <TouchableOpacity
                      style={[
                        Styles.showPaymentWrapper,
                        {
                          borderColor:
                              paymentSelect === index
                                ? Colors.appHeaderColor
                                : '#DADFE6',
                        },
                      ]}
                      onPress={() => {
                        this.selectOption(index);
                      }}
                    >
                      <View style={{ flexDirection: 'row', marginLeft: 15 }}>
                        <Image
                          source={
                              paymentSelect === index
                                ? Images.Info
                                : Images.emptyCircle
                            }
                          style={Styles.mainProfileWrapper1}
                        />
                        {data?.name === '' ? (
                          <Image
                            source={data.logo}
                            style={
                                data.id === 2
                                  ? Styles.logoWrapper
                                  : data.id === 3
                                    ? Styles.logoWrapper1
                                    : data.id === 4
                                      ? Styles.logoWrapper2
                                      : data.id === 5
                                        ? Styles.logoWrapper3
                                        : Styles.rightArrowStyle
                              }
                          />
                        ) : (
                          <Text style={Styles.titleText}>{data.name}</Text>
                        )}
                      </View>
                    </TouchableOpacity>
                  </>
                ))}
              {paymentSelect === 5 && (
                <Text style={Styles.titleText1}>
                  {Constants.SELECT_PAYMENT}
                </Text>
              )}
            </View>
          </ScrollView>
          {paymentSelect === 5 ? (
            <TouchableOpacity
              style={Styles.donateButton}
              onPress={() => {
                this.props.navigation.navigate('CreditCardDetails');
              }}
            >
              <View style={{ flexDirection: 'row' }}>
                <Text style={Styles.buttonText}>{'Continue '}</Text>
                <Image source={Images.right} style={Styles.rightArrowStyle1} />
              </View>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity style={Styles.donateButton}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={Styles.buttonText}>{'Donate €10 '}</Text>
                <Image source={Images.right} style={Styles.rightArrowStyle1} />
              </View>
            </TouchableOpacity>
          )}
        </SafeAreaView>
      </>
    );
  }
}

export default CardSelect;
