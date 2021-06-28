import React from 'react';
import {
  View, Text, ImageBackground, Dimensions,
  StyleSheet, ImageSourcePropType,
} from 'react-native';
import * as Progress from 'react-native-progress';
import Colors from '../Styles/Colors';

type ProjectCardProps = {
  mainImage: ImageSourcePropType,
  title: string,
  description: string,
  percent: number,
  price: number,
  bar: number,
}

export default function ProjectCard({
  mainImage, title, description, percent, price, bar,
}: ProjectCardProps) {
  <View style={styles.cardWrapper}>
    <ImageBackground
      style={styles.mainImage}
      source={mainImage}
      imageStyle={{ borderTopLeftRadius: 15, borderTopRightRadius: 15 }}
    >
      <View
        style={{ flexDirection: 'row', marginTop: 20, marginLeft: 20 }}
      >
        <View style={styles.labelContainer}>
          <Text
            style={{
              fontSize: 15,
              color: Colors.White,
              fontWeight: '500',
            }}
          >
            #Children
          </Text>
        </View>
        <View style={styles.labelContainer1}>
          <Text
            style={{
              fontSize: 15,
              color: Colors.White,
              fontWeight: '500',
            }}
          >
            Active
          </Text>
        </View>
      </View>
    </ImageBackground>
    <View style={styles.cardData}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>

      <View style={styles.separator} />

      <View style={styles.dataContentWrapper}>
        <Text style={styles.description1}>{`${percent} %`}</Text>
        <Text style={styles.description3}>{`${price} €`}</Text>
      </View>
      <Progress.Bar
        progress={bar}
        width={widthScreen / 1.28}
        height={8}
        borderRadius={15}
        borderWidth={0}
        color="#4B97FC"
        unfilledColor="#E3F0FC"
      />
    </View>
  </View>;
}

const widthScreen = Dimensions.get('window').width;

const styles = StyleSheet.create({
  cardWrapper: {
    width: widthScreen / 1.12,
    alignSelf: 'center',
    backgroundColor: Colors.White,
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    marginBottom: 20,
  },
  mainImage: {
    width: '100%',
    height: 150,
  },
  cardData: {
    marginTop: 15,
    marginBottom: 20,
    width: '90%',
    alignSelf: 'center',
  },
  title: {
    fontSize: 21,
    fontWeight: '500',
    color: '#05263D',
  },
  description: {
    fontSize: 13,
    fontWeight: '400',
    color: '#6D7E92',
    marginTop: 7,
  },
  separator: {
    borderBottomWidth: 1,
    borderBottomColor: '#DADFE6',
    marginTop: 10,
    marginBottom: 10,
  },
  dataContentWrapper: {
    flexDirection: 'row',
    marginBottom: 15,
    justifyContent: 'space-between',
  },
  description3: {
    color: '#073C7A',
    fontSize: 17,
    fontWeight: '600',
    marginTop: 3,
    marginLeft: 3,
  },
  description1: {
    color: '#4B97FC',
    fontSize: 20,
    fontWeight: '700',
  },
  labelContainer: {
    width: 90,
    height: 30,
    backgroundColor: 'rgba(0, 5, 21, 0.24)',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelContainer1: {
    width: 90,
    height: 30,
    backgroundColor: 'rgba(0, 5, 21, 0.24)',
    borderRadius: 9,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 7,
  },
});
