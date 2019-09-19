import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Board {

    renderRow() {
        return (
            <View style={styles.row}>
                <View style={styles.cell}></View>
                <View style={styles.cell}></View>
                <View style={styles.cell}></View>
            </View>
        );
    }

    render() {

        const table = [null ,null, null];

        return (
            <View style={styles.board}>{
                data.map((datum) => {
                    return this.renderRow();
                })
            }
            </View>
        );
    }
}

const styles = StyleSheet.create({

    board: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    row: {
        flex: 1,
        alignSelf: 'stretch',
        flexDirection: 'row',
    },

    cell: {
        flex: 1,
        alignSelf: 'stretch',
    }
});

export default Board;