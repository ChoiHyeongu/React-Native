import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import SignupButton from './SignupButton.js'

export default function Welcome2() {
    return (
        <View>
            <Text style={styles.tos}>서비스 이용을 위한 이용약관</Text>
            <Text style={styles.text}>
                Lorem ipsum dolor sit amet, consetetur sadipsci ng elitr, sed diam nonumy eirmod tempor invid nt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd guberg en, no sea takimata sanctus est Lorem ipsum do lor sit amet. Lorem ipsum dolor sit amet, conset etur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliqu yam erat, sed diam voluptua. At vero eos et acc usam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanct us est Lorem ipsum dolor sit amet. Lorem ipsu m dolor sit amet, consetetur sadipscing elitr, se d diam nonumy eirmod tempor invidunt ut labo re et dolore magna etur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliqu yam erat, sed diam voluptua. At vero eos et acc usam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanct us est Lorem ipsum dolor sit amet. Lorem ipsu
            </Text>
            <SignupButton title={'동의학도 시작하기'} />
            <Text style={styles.alreadyRegister}>이미 계정이 있으신가요?</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    tos: {
        fontWeight: 'bold',
        fontSize: 18,
        opacity: .7,
    },

    text: {
        fontSize: 15,
        opacity: .6,
    },

    alreadyRegister: {
        fontSize: 15,
        color: "#415FFF",
        textAlign: "center",
        marginBottom: 32,
        marginTop: 10,
    },
})

