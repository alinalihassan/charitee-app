import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import Styles from './Styles';

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
    this.moved = false;
  }

  render() {
    return (
      <>
        <SafeAreaView style={Styles.mainConatiner} />
      </>
    );
  }
}

export default Profile;
