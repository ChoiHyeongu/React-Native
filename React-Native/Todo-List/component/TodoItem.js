import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default class TodoItem extends React.Component{
    render(){
        const {text, checked, id, onToggle, onRemove} = this.props;
        
        return (
            <View>
                <Text>
                    X
                </Text>
                <View>
                    <Text>{text}</Text>
                </View>
                <View>
                    Checked
                </View>
            </View>
        )
    }
}