import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default class MainScreen extends React.Component{

    static navigationOptions = {
        headerLeft: <Icon 
        name="ios-person-add" 
        size={25}
        style={{ paddingRight:10 }}
        color="black"/>,

        title: '목록',

        headerRight: <Icon 
            name="ios-search" 
            size={25}
            style={{ paddingRight:10 }}
            color="black"
        />
    }
    render(){
        return(
            <View>
                <Text>
                    MainScreen
                </Text>
            </View>
        )
    }
}