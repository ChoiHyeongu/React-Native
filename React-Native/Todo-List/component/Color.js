import React from 'react';
import { View, StyleSheet } from 'react-native';

export default function Color({color, active, onClick}) {
    return (
        <View style={styles.color}></View>
    )    
}

const styles = StyleSheet.create({
    
    color: {
        width: 12,
        height: 12,
        backgroundColor:"#ffffff"
    }
})