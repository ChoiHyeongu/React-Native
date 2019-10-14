import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import MainScreen from './Screens/MainScreen.js';
import LoginScreen from './Screens/LoginScreen.js';

export default class App extends React.Component{
  
  render(){
    return (
      <LoginScreen />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
