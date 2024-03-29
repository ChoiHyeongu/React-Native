import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.parent}>
      <View style={styles.topBlock}>
        <View style={styles.leftCol}>
          <View style={[styles.cellOne, styles.base]} />
          <View style={[styles.cellTwo, styles.base]} />
        </View>
        <View style={[styles.cellThree, styles.base]} />
        </View>git 
        <View style={styles.bottomBlock} >
        <View style={[styles.cellFour, styles.base]} />
        <View style={[styles.cellFive, styles.base]} />
        <View style={styles.bottomRight}>
          <View style={[styles.cellSix, styles.base]} />
          <View style={[styles.cellSeven, styles.base]} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  parent: {
    flexDirection: "column",
    position: "absolute",
    top: 30,
    left: 0,
    right: 0,
    bottom: 0,
  },

  base: { borderColor: "#000000", borderWidth: 5 },
  topBlock: { flexDirection: "row", flex: 5 },
  leftCol: { flex: 2 },
  bottomBlock: { flex: 2, flexDirection: "row" },
  bottomRight: { flexDirection: "column", flex: 2 },
  cellOne: { flex: 1, borderBottomWidth: 15 },
  cellTwo: { flex: 3 },
  cellThree: { flex: 5, backgroundColor: "#FF0000" },
  cellFour: { flex: 3, backgroundColor: "#0000FF" },
  cellFive: { flex: 6 },
  cellSix: { flex: 1 },
  cellSeven: { flex: 1, backgroundColor: "#FFFF00" }
});
