import React from 'react';
import { View, StyleSheet } from 'react-native';
import Color from './Color.js'

export default function Palette() {
    
    const colorList = colors.map(
        (color) => (<Color color={color} key={color}></Color>)
    )
    
    return(
        <View>
            {colorList}
        </View>
    )
}

const styles = StyleSheet.create({
    palette: {
        
    }
})