import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function Form({ value, onChange, onCreate, onKeyPress, color }) {
    return (
        <View style={styles.form}>
            <TextInput
                style={styles.input}
            />
            <TouchableOpacity style={styles.addButton}>
                <Text style={styles.addText}>추가</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    form: {
        height: 60,
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 12,
        paddingRight: 12,
        flexDirection: "row",
        borderBottomWidth: 2,
        borderBottomColor: "#c5f6fa"
    },

    input: {
        flex: 1,
        fontSize: 15,
    },

    addButton: {
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#22b8cf",
        borderRadius: 2.5,
    },

    addText: {
        textAlign: "center",
        fontSize: 20,
        width: 80,
        color: "white",
    }
})