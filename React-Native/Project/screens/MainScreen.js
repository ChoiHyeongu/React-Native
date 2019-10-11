import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MemberList from '../components/MemberList.js';
import TopBar from '../components/TopBar.js'
import Icon from 'react-native-vector-icons/Ionicons';

export default class MainScreen extends React.Component {

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

    render() {
        return (
            <View>
                <MemberList />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    
    icon: {
        alignSelf: "center",
        margin: 10,
    },

    title: {
        fontSize: 30,
        fontWeight: "700",
        margin: 40,
        marginRight: 200,
    }
})