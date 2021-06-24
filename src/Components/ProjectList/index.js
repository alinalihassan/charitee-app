import React, { Component } from 'react';
import { View, Text, ImageBackground, Dimensions } from 'react-native';
import Styles from './Styles';
import Colors from '../../Styles/Colors';
import * as Progress from 'react-native-progress';

const widthScreen = Dimensions.get('window').width;

class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { mainImage, title, description, percent, price, bar } =
      this.props.projectData;
    return (
      <>
        <View style={Styles.cardWrapper}>
          <ImageBackground
            style={Styles.mainImage}
            source={mainImage}
            imageStyle={{ borderTopLeftRadius: 15, borderTopRightRadius: 15 }}>
            <View
              style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}>
              <View style={Styles.labelContainer}>
                <Text
                  style={{
                    fontSize: 15,
                    color: Colors.White,
                    fontWeight: '500',
                  }}>
                  {'#Children'}
                </Text>
              </View>
              <View style={Styles.labelContainer1}>
                <Text
                  style={{
                    fontSize: 15,
                    color: Colors.White,
                    fontWeight: '500',
                  }}>
                  {'Active'}
                </Text>
              </View>
            </View>
          </ImageBackground>
          <View style={Styles.cardData}>
            <Text style={Styles.title}>{title}</Text>
            <Text style={Styles.description}>{description}</Text>

            <View style={Styles.separator} />

            <View style={Styles.dataContentWrapper}>
              <Text style={Styles.description1}>{`${percent} %`}</Text>
              <Text style={Styles.description3}>{`${price} €`}</Text>
            </View>
            <Progress.Bar
              progress={bar}
              width={widthScreen / 1.28}
              height={8}
              borderRadius={15}
              borderWidth={0}
              color={'#4B97FC'}
              unfilledColor={'#E3F0FC'}
            />
          </View>
        </View>
      </>
    );
  }
}
export default ProjectList;
