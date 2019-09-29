import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <View>
                <TouchableOpacity style={styles.container}>
                    <Text style={styles.text}>추가</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 6,
        paddingBottom: 6,
        paddingRight: 1,
        borderRadius: 2.25,
        fontWeight: "600",
        width: 70,
        height: 50,
        backgroundColor: "#22b8cf",
        alignItems: "center",
        justifyContent: "center",
    },

     text: {
         color: "white",
         fontSize: 25,
     }
});