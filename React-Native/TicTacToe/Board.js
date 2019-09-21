import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from './Button.js';

const CIRCLE = "O";
const CROSS = "X";
const NOTHING = " ";

class Board extends React.Component {

    constructor(props) {
        super(props);

        this.checkBoard = this.checkBoard.bind(this);

        this.state = {
            gameState: [],
            currentPlayer: 1,
        }
    }

    componentDidMount() {
        this.initializeGame();
    }

    render() {

        return (
            <View style={styles.board}>
                <View style={styles.row}>
                    <Button turn={CROSS} onPress={this.checkBoard.bind(this, 0, 0)} />
                    <Button style={styles.borderStartEnd} turn={CROSS} onPress={this.checkBoard.bind(this, 0, 1)} />
                    <Button turn={CROSS} onPress={this.checkBoard.bind(this, 0, 2)} />
                </View>
                <View style={[styles.row, { borderTopWidth: 1, borderBottomWidth: 1}]}>
                    <Button turn={CROSS} onPress={this.checkBoard.bind(this, 1, 0)} />
                    <Button style={styles.borderStartEnd} turn={CROSS} onPress={this.checkBoard.bind(this, 1, 1)} />
                    <Button turn={CROSS} onPress={this.checkBoard.bind(this, 1, 2)} />
                </View>
                <View style={styles.row}>
                    <Button turn={CROSS} onPress={this.checkBoard.bind(this, 2, 0)} />
                    <Button style={styles.borderStartEnd} turn={CROSS} onPress={this.checkBoard.bind(this, 2, 1)} />
                    <Button turn={CROSS} onPress={this.checkBoard.bind(this, 2, 2)} />
                </View>
            </View>
        );
    }

    checkBoard(row, col) {
        
        var currentPlayer = this.state.currenPlayer;
        
        var arr = this.state.gameState.slice();
        arr[row, col] = currentPlayer;
        this.setState({ gameState: arr });

        var nextPlayer = (currentPlayer == 1) ? -1 : 1;
        this.setState({currentPlayer: nextPlayer});
        
        console.log(this.state.gameState);
    }

    initializeGame() {
        this.setState({
            gameState: [
                [0, 0, 0],
                [0, 0, 0],
                [0, 0, 0]
            ]
        });
    }
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

    borderStartEnd: {
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