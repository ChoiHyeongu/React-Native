import React from 'react';
import {View, StyleSheet} from 'react-native';

const Color = ({color, active, onClick}) => {
    return (
        <View 
            style={[{backgroundColor: color}, styles.color]}
            onClick={onClick}
        />
    )
}

export default function Palette({colors, selected, onSelect}) {
    const colorList = colors.map(
        (color) => (
        <Color 
            color={color} 
            active={selected===color} 
            onClick={()=>onSelect(color)}
            key={color}
            />
        )
    )

    return (
        <View style={styles.palette}>
            {colorList}
        </View>
    )
}

const styles = StyleSheet.create({
   palette: {
       flexDirection: "row",
       justifyContent: "center",
    },

   color: {
       width: 32,
       height: 32,
       opacity: 0.4,
       marginLeft: 20,
       marginRight: 20,
   },
})