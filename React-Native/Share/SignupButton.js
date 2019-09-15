import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
} from 'react-native';

export default class SignupButton extends Component{

  static defaultProps = {
    title: 'untitled',
    onPress: () => null,
  }

  constructor(props){
    super(props);
  }

  render(){
    return (
      <TouchableOpacity style={styles.button}>
        <Text style={styles.title}>{this.props.title}</Text>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#415FFF",
    borderRadius: 16,
    marginTop: 22,
    alignItems: "center",
  },
  title: {
    color:"white",
    fontSize: 30,
    fontWeight: "bold",
  },
});