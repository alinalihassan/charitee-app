import React, { Component } from 'react';
import { SafeAreaView } from 'react-native';
import Styles from './Styles';

class Home extends Component {
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
        <SafeAreaView style={Styles.mainConatiner}></SafeAreaView>
      </>
    );
  }
}

export default Home;
