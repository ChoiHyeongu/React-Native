import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation-stack';
import Welcome1 from './Welcome1.js'
import Welcome2 from './Welcome2.js'

const App = createStackNavigator({
  Welcome1: { screen: welcome1 },
  Welcome2: { screen: welcome2 },
},

{initialRouteName: 'Welcome1', headerMode: 'none'}
);

export default createAppContainer(App);
