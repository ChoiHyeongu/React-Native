import React from 'react';
import { Text, View, TouchableHighlight, StyleSheet } from 'react-native';

class TouchableHighlight extends React.Component {
  constructor(props) {
    super(props);
    this.state = { pressing: false };
  }

  _onPressIn = () => {
    this.setState({
      pressing: true
    })
  }

  _onPressOut = () => {
    this.setState({
      pressing: false
    })
  }

  _onPressLong = () => {
    this.state = { pressing: true };
    console.log("Long Pessing");
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={styles.toucable}
          onPressIn={this._onPressIn}
          onPressOut={this._onPressOut}
          onPressLong={this._onPressLong}>
          <View style={styles.button}>
            <Text style={styles.welcome}>{this.state.pressing ? "EEK!" : "PUSH ME"}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF",
  },

  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
    color: "#FFFFFF"
  },

  toucable: {
    borderRadius: 100,
  },

  button: {
    backgroundColor: "#FF0000",
    borderRadius: 100,
    height: 200,
    width: 200,
    justifyContent: "center",
  }
});

export default TouchableHighlight;