import React from 'react';
import { StyleSheet, Text, View, Alert } from 'react-native';
import Button from './Button.js';

const CIRCLE = "O";
const CROSS = "X";
const NOTHING = "   ";

class Board extends React.Component {

    constructor(props) {
        super(props);

        console.log("constructor");
        this.checkBoard = this.checkBoard.bind(this);
        this.setCell = this.setCell.bind(this)

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
                    <Button turn={this.setCell(0)} onPress={this.checkBoard.bind(this, 0)} />
                    <Button style={styles.borderStartEnd} turn={this.setCell(1)} onPress={this.checkBoard.bind(this, 1)} />
                    <Button turn={this.setCell(2)} onPress={this.checkBoard.bind(this, 2)} />
                </View>
                <View style={[styles.row, { borderTopWidth: 1, borderBottomWidth: 1 }]}>
                    <Button turn={this.setCell(3)} onPress={this.checkBoard.bind(this, 3)} />
                    <Button style={styles.borderStartEnd} turn={this.setCell(4)} onPress={this.checkBoard.bind(this, 4)} />
                    <Button turn={this.setCell(5)} onPress={this.checkBoard.bind(this, 5)} />
                </View>
                <View style={styles.row}>
                    <Button turn={this.setCell(6)} onPress={this.checkBoard.bind(this, 6)} />
                    <Button style={styles.borderStartEnd} turn={this.setCell(7)} onPress={this.checkBoard.bind(this, 7)} />
                    <Button turn={this.setCell(8)} onPress={this.checkBoard.bind(this, 8)} />
                </View>
            </View>
        );
    }

    checkBoard(index) {

        var currentPlayer = this.state.currentPlayer;
        console.log(`[${index}] = ${currentPlayer}`);

        var arr = this.state.gameState;
        arr[index] = currentPlayer;
        this.setState({ gameState: arr });
        
        this.checkWinner(arr);

        var nextPlayer = (currentPlayer == 1) ? -1 : 1;
        this.setState({ currentPlayer: nextPlayer });

        console.log(this.state.gameState);
        console.log("---------------");
    }

    setCell(index){
        var value = this.state.gameState[index];
        switch (value) {
            case 1:
                return CIRCLE;
                break;
            case -1:
                return CROSS;
                break;
            default :
                return NOTHING;
                break;
        }
    }

    initializeGame() {
        this.setState({
            gameState: [
                [0, 0, 0, 0, 0, 0, 0, 0, 0]
            ]
        });
    }

    checkWinner(gameState){

        const winCase = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];

        var arr = [];

        for(let i=0;i<winCase.length;i++){
            const [a, b, c] = winCase[i];
            if(gameState[a] && gameState[a] === gameState[b] && gameState[b] === gameState[c]){
                console.log("Winner is " + this.state.currentPlayer);
                Alert.alert(
                    `Winner is ${this.state.currentPlayer}`,
                    'If you want play more press OK',
                    [
                      {
                        text: 'OK',
                        onPress: () => console.log('Cancel Pressed'),
                        style: 'cancel',
                      }
                    ],
                  );
                break;
            } else {
                console.log("Nobody win " + gameState[a] +", " + gameState[b] + ", " + gameState[c]);
            }
        }
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