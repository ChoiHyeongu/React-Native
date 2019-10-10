import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function Member(profileName) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.profileImage}
                source={require('C:/Users/Motivation/Desktop/Programming/React-Native/React-Native/Project/components/img/profile.png')}
            />
            <Text style={styles.name}>
                최형우
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        marginBottom: 20,
        marginLeft: 30,
        flexDirection: "row",
    },

    profileImage: {
        width: 45,
        height: 45,
        borderRadius: 15,
    },

    name: {
        alignSelf: "center",
        marginLeft: 20,
        fontSize: 25,
    }
})