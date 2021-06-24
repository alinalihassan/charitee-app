import React from 'react';
import {
  Image, View, StyleSheet, Text,
} from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import colors from '../Styles/Colors';
import Images from '../Styles/Images';
import Home from '../Screen/MainScreens/Home';
import Projects from '../Screen/MainScreens/Projects';
import Profile from '../Screen/MainScreens/Profile';

const styles = StyleSheet.create({
  tabBarItemContainerFocused: {
    flex: 1,
    marginTop: 20,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  tabBarItemContainer: {
    flex: 1,
    marginTop: 20,
    marginBottom: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
  },
  tabBarIcon: {
    width: 27,
    height: 27,
    tintColor: '#8AA2C6',
  },
  tabBarIconFocused: {
    width: 27,
    height: 27,
    tintColor: colors.appHeaderColor,
  },
  headerContainer: {
    height: 80,
    alignItems: 'center',
    justifyContent: 'flex-end',
    paddingBottom: 10,
  },
  headerImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: 70,
  },
});

export default createBottomTabNavigator(
  {
    Home: { screen: Home },
    Projects: { screen: Projects },
    Profile: { screen: Profile },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }: { focused: boolean}) => {
        const { routeName } = navigation.state;
        let iconSource;
        let iconName;

        switch (routeName) {
          case 'Home':
            iconSource = Images.Home;
            iconName = 'Home';
            break;
          case 'Projects':
            iconSource = Images.Projects;
            iconName = 'Projects';
            break;
          case 'Profile':
            iconSource = Images.profile;
            iconName = 'Profile';
            break;
          default:
            iconSource = Images.Home;
            iconName = 'Home';
        }
        return (
          <View
            style={[
              styles.tabBarItemContainer,
              focused && styles.tabBarItemContainerFocused,
            ]}
          >
            <Image
              resizeMode="contain"
              source={iconSource}
              style={[styles.tabBarIcon, focused && styles.tabBarIconFocused]}
            />
            <Text
              style={{
                fontSize: 13,
                marginTop: 5,
                color: focused ? colors.appHeaderColor : '#8AA2C6',
              }}
            >
              {iconName}
            </Text>
          </View>
        );
      },
    }),
    tabBarOptions: {
      showLabel: false,
      style: {
        backgroundColor: colors.White,
        borderTopWidth: 0.5,
        borderTopColor: '#d6d6d6',
      },
      labelStyle: {
        color: '#8AA2C6',
      },
    },
  },
);
