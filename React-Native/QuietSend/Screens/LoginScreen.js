import React from 'react';
import {Text, View, StyleSheet, Button, TextInput} from 'react-native';

export default class LoginScreen extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text>
                    조용한 편지
                </Text>
                <View>
                    <TextInput/>
                    <TextInput/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: 'center',
    }
});