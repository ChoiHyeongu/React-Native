import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default function TodoListTemplate({ form, children }) {
    return (
        <View style={styles.todoListTemplate}>
            <Text style={styles.title}>
                오늘 할 일
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    todoListTemplate: {
        alignContent: "flex-start",
        backgroundColor: "white",
    },

    title: {
        textAlign: "center",
        padding: 24,
        fontWeight: "200",
        fontSize: 30,
        backgroundColor: "#22b8cf",
        color: "white"
    }
})