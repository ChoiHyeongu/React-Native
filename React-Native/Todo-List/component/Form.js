import React from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import AddButton from './Button/Button.js'

export default function Form({value}) {
  return (
    <View style={styles.container}>
        <TextInput 
            value={value}
            style={styles.input}
        />

        <AddButton />   
    </View>
  );
}

const styles = StyleSheet.create({

    container: {
        flexDirection: 'row',
    },

    input: {
        flex: 1,
        fontSize: 15,
        borderBottomColor: "#c5f6fa",
        borderBottomWidth: 0.75,
        borderStartWidth: 2.25,
        height: 50,
        color: "black",
        fontWeight: "600",
    }
})