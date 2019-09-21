import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './Button.js';

const CIRCLE = "O";
const CROSS = "X";
const NOTHING = " ";

const gateState = [
    0,0,0,
    0,0,0,
    0,0,0,
]

class Board extends React.Component {

    render() {
        return (
            <View style={styles.board}>
                <View style={[styles.row, {borderBottomWidth: 1}]}>
                    <Button turn={CROSS} onPress={this.checkBoard.bind(this, 0)}/>
                    <Button style={styles.borderStartEnd} turn={CROSS} />
                    <Button turn={CROSS} />
                </View>
                <View style={styles.row}>
                    <Button turn={CROSS} />
                    <Button style={styles.borderStartEnd} turn={CROSS} />
                    <Button turn={CROSS} />
                </View>
                <View style={[styles.row, {borderTopWidth: 1}]}>
                    <Button turn={CROSS} />
                    <Button style={styles.borderStartEnd} turn={CROSS} />
                    <Button turn={CROSS} />
                </View>
            </View>
        );
    }
}

checkBoard = (index) => {
    console.log(index);
}

const styles = StyleSheet.create({

    board: {
        width: 350,
        height: 350,
        justifyContent: "center",
        alignItems: "center",
        borderColor: "#141518",
    },

    row: {
        borderColor: "white",
        borderWidth: 0,
        flexDirection: "row",
    },

    borderStartEnd:{    
        borderWidth: 1,
        borderColor: "white",
        borderTopWidth: 0,
        borderBottomWidth: 0,
    },

    button: {
        width: 130,
        height: 130,
        alignItems: "center",
        justifyContent: "center",
    },
});

export default Board;