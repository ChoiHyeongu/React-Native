import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Member from './Member.js'

export default class MemberList extends React.Component{ 

    handleProfileClicked = () => {
    console.log("handleProfileClicked");
  }

    render(){

        const{
            handleProfileClicked  
        } = this;

        return(
            <View>
                <Member
                    profileName="최형우"
                    onClick={handleProfileClicked}
                />
                <Member
                    profileName="강화성"
                    onClick={handleProfileClicked}
                />
                <Member
                    profileName="신수아"
                    onClick={handleProfileClicked}
                />
                <Member
                    profileName="권은영"
                    onClick={handleProfileClicked}
                />
                <Member
                    profileName="전재민"
                    onClick={handleProfileClicked}
                />
                <Member
                    profileName="박은주"
                    onClick={handleProfileClicked}
                />
            </View>
        );
    }
}