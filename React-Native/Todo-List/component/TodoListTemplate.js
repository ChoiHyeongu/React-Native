import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TodoListTemplate({ form, palette, children }) {
    return (
        <View>
            <Text style={styles.title}>
                오늘 할 일
            </Text>
            <View>
                {form}
            </View>
            <View style={styles.paletteWrap}>
                {palette}
            </View>
            <View>
                {children}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    title: {
        width: "100%",
        padding: 24,
        textAlign: "center",
        fontSize: 30,
        fontWeight: "400",
        backgroundColor: "#22b8cf",
        color: "white",
    },

    paletteWrap: {
        padding: 12,
        justifyContent: "center",
        backgroundColor: "#f1f3f5"
    }
})