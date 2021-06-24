import React, { Component } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import { TextInput } from 'react-native-paper';
import Images from '../../../Styles/Images';
import Colors from '../../../Styles/Colors';
import * as Constants from '../../../Constants';
import Styles from './Styles';

class Register extends Component {
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
        <SafeAreaView style={Styles.mainConatiner}>
          <View style={Styles.mainHeader}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate('Welcome');
              }}>
              <Image source={Images.backIcon} style={Styles.indecatorStyle} />
            </TouchableOpacity>
            <Text style={Styles.donateText}>{'Register'}</Text>
            <Text style={Styles.donateText1}>{'ok'}</Text>
          </View>

          <View style={Styles.mainScreenConatiner}>
            <TextInput
              style={Styles.inputWrapper}
              label="Email"
              value={email}
              onChangeText={(text) => this.setState({ email: text })}
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
              label="Password"
              value={password}
              onChangeText={(text) => this.setState({ password: text })}
              secureTextEntry={true}
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

            <TouchableOpacity style={Styles.donateButton}>
              <View style={{ flexDirection: 'row' }}>
                <Text style={Styles.buttonText}>{Constants.SIGN_UP}</Text>
                <Image source={Images.right} style={Styles.rightArrowStyle} />
              </View>
            </TouchableOpacity>

            <View style={Styles.bottomWrapper}>
              <Text style={Styles.bottomText1}>
                {Constants.ALREADY_HAVE_ACCOUNT}
              </Text>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('Login');
                }}>
                <Text style={Styles.loginText}>{Constants.LOGIN}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </>
    );
  }
}

export default Register;
