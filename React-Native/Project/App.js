import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import MainScreen from './screens/MainScreen.js'

const AppStackNavigator = createStackNavigator({
  Main:{
    screen: MainScreen 
  },

  Write: {
    screen: WriteScreen
  }
});

export default createAppContainer(AppStackNavigator);