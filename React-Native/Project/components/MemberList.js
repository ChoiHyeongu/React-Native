import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Member from './Member.js'
import TopBar from './TopBar.js'

export default class MemberList extends React.Component{ 

    handleProfileClicked = () => {
    console.log("handleProfileClicked");
  }

    render(){
        return(
            <View>
                <TopBar />

                <Member />
                <Member />
                <Member />
                <Member />
                <Member />
                <Member />
                <Member />
                <Member />
                <Member />
            </View>
        );
    }
}