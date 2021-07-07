import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import colors from '../Styles/Colors';
import Projects from '../Screen/MainScreens/Projects';

const Tab = createBottomTabNavigator();

function App() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: colors.appHeaderColor,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Projects}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }: any) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={Projects}
        options={{
          tabBarLabel: 'Favorites',
          tabBarIcon: ({ color, size }: any) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Projects}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }: any) => (
            <MaterialCommunityIcons
              name="account"
              color={color}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default App;
