import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TurnInfo from './turnInfo.js'
import Board from './Board.js'

class App extends React.Component {

  state = {
    turn: false,
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.turnText}>It's is <TurnInfo turn={this.state.turn ? "circle" : "cross"} /> turn.</Text>
        <Board />
        <View style={styles.time}>
          <Text style={styles.text}>1:32</Text>
          <Text style=
          {styles.timeText}>Time passed</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141518",
    alignItems: "center",
  },

  text: {
    fontWeight: '100',
    fontSize: 50,
    color: "white",
  },

  timeText: {
    fontSize: 15,
    color: "white",
  },

  turnText: {
    fontWeight: '100',
    fontSize: 30,
    color: "white",
    margin: 70,
  },

  time: {
    marginTop: 70,
    alignItems: "center",
  }
});

export default App;
