import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function turnInfo({turn}) {
    return (
        <Text style={styles.text}>{turn}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        color: "white",
        fontWeight: "bold",
    },
});