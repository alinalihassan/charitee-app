import React, { Component } from 'react';
import {
  View, Image, Text, TouchableOpacity,
} from 'react-native';
import Images from '../../../Styles/Images';
import Styles from './Styles';

class FailedStatus extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.moved = false;
  }

  render() {
    return (
      <View style={Styles.mainContainer}>
        <View style={Styles.mainContainerfailed}>
          <Image source={Images.failedImage} style={Styles.introFailedImage} />

          <Text style={Styles.failedHeaderText}>
            Oops! Unfortunately, the operation was not completed successfully.
          </Text>
          <Text style={Styles.descriptionFailed}>
            You can try again, or make a donation in any other way.
          </Text>
        </View>

        <View style={Styles.bottomContainer}>
          {/* Button */}
          <TouchableOpacity
            style={Styles.donateButtonFailed}
            onPress={() => {
              this.props.navigation.navigate('Donate');
            }}
          >
            <View style={{ flexDirection: 'row' }}>
              <Text style={Styles.buttonText}>Try again</Text>
              <Image source={Images.right} style={Styles.rightArrowStyle1} />
            </View>
          </TouchableOpacity>

          {/* Button */}
          <TouchableOpacity
            style={Styles.failedHomeButton}
            onPress={() => {
              this.props.navigation.navigate('main');
            }}
          >
            <Text style={Styles.failedButtonText}>Back to Main Page</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default FailedStatus;
