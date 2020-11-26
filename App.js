import React from 'react';
import { StatusBar } from 'expo-status-bar';
import styled from 'styled-components';
import { Entypo } from '@expo/vector-icons';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from './components/screens/HomeScreen';
import LiveScreen from './components/screens/LiveScreen';
import ProfileScreen from './components/screens/ProfileScreen';
import GameScreen from './components/screens/GameScreen';

import Text from './components/Text';

const AppStack = createStackNavigator();
const TabNav = createBottomTabNavigator();

const tapBarOptions = {
  showLabel: false,

  style: {
    backgroundColor: '#343434',
    borderTopColor: '#343434',
    paddingBottom: 12
  }
};

const TabNavScreen = () => {
  return (
    <TabNav.Navigator
      tabBarOptions={tapBarOptions}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName;

          if (route.name === 'HomeScreen') {
            iconName = 'home';
          } else if (route.name === 'LiveScreen') {
            iconName = 'game-controller';
          } else {
            iconName = 'user';
          }

          // You can return any component that you like here!
          return (
            <TapBarIconContainer focused={focused}>
              <Text>
                <Entypo name={iconName} size={24} color="#ffffff" />
              </Text>
            </TapBarIconContainer>
          );
        }
      })}
    >
      <TabNav.Screen name="HomeScreen" component={HomeScreen} />
      <TabNav.Screen name="LiveScreen" component={LiveScreen} />
      <TabNav.Screen name="ProfileScreen" component={ProfileScreen} />
    </TabNav.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <AppStack.Navigator mode="modal" headerMode="none">
        <AppStack.Screen name="App" component={TabNavScreen} />
        <AppStack.Screen name="GameScreen" component={GameScreen} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
}

const TapBarIconContainer = styled.View`
  background-color: ${props => (props.focused ? '#819ee5' : '#343434')};
  padding: 2px 16px;
  border-radius: 32px;
`;
