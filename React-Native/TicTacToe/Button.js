import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function Button(props){
    return(
        <View style={[styles.button, props.style]}>
            <TouchableOpacity onPress={props.onPress}>
                <Text style={styles.turn}>{props.turn}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    button:{
        width: 130,
        height: 130,
        alignItems: "center",
        justifyContent: "center",
    },

    turn: {
        color: "white",
        fontSize: 120,
    }
})