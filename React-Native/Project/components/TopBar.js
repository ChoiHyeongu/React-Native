import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class TopBar extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    목록
                </Text>
                <Icon 
                    name="ios-search" 
                    size={25}
                    style={[styles.icon]}
                    color="black"/>
                <Icon 
                    name="ios-person-add" 
                    size={25}
                    style={styles.icon}
                    color="black"/>
                <Icon 
                    name="ios-settings" 
                    size={25}
                    style={styles.icon}
                    color="black"/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
    icon: {
        alignSelf: "center",
        margin: 10,
    },

    container: {
        flexDirection: "row",
    },

    title: {
        fontSize: 30,
        fontWeight: "700",
        margin: 40,
        marginRight: 200,
    }
})