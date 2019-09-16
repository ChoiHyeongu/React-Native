import React from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';
import Forecast from './Forecast.js';
import OpenWeatherMap from './OpenWeatherMap';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { zip: "", forecast: null };
  }

  handleTextChange = event => {
    let zip = event.nativeEvent.text;
    OpenWeatherMap.fetchForecast(zip).then(forecast => {
      this.setState({ forecast: forecast });
    });
  };

  render() {
    let content = null;
    if (this.state.forecast !== null) {
      content = (
        <Forecast
          main={this.state.forecast.main}
          description={this.state.forecast.description}
          temp={this.state.forecast.temp}
        />
      )

      console.log("Forecast Renderd");
    }

    return (
      <ImageBackground
        source={require("./assets/flowers.png")}
        style={{ width: '100%', height: '100%' }, {flex:1}}>
        <View style={styles.container}>
        <Text style={styles.welcome}>You input {this.state.zip}</Text>
        {content}
        <TextInput style={styles.input} onSubmitEditing={this.handleTextChange} />
          </View>
        </ImageBackground >
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#666666"
  },

  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10,
  },

  input: {
    fontSize: 20,
    borderWidth: 2,
    padding: 2,
    width: 100,
    textAlign: "center",
    height: 40,
  },
});