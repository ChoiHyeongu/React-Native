import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import SignupButton from './SignupButton.js'

export default function Welcome1() {

    const {navigation} = this.props;

    return (
        <View style={styles.container}>
            <View style={styles.halfContainer}>
                <Image
                    source={require('./assets/banner.png')}
                    style={styles.bannerImage} />
            </View>
            <View style={styles.bannerContainer}>
                <Text style={styles.banner1}>
                    나누다 아끼다
                </Text>
                <Text style={styles.banner2}>
                    세상을 바꾸다.
                </Text>
                <View>
                    <Text style={styles.subtitle}>
                        이강백의 희곡 결혼에서{"\n"}
                        남자는 삶을 잠시 빌리는 것이라 하였습니다.{"\n"}
                        어쩌면 우리도 다르지 않을지 모릅니다.{"\n"}
                        무언가를 소유하지 않고, 함께 나누는 것.{"\n"}
                        바른 세상을 위한 거대한 한 발자국을 시작합시다.{"\n"}
                    </Text>
                </View>
                <Text style={styles.tos}>
                    서비스 이용을 위한 이용약관
                 </Text>
                <SignupButton 
                onPress={()=>navigation.navigate("Welcome2")}
                title={'회원가입'}/>
                <Text style={styles.alreadyRegister}>이미 계정이 있으신가요?</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },

    halfContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },

    bannerContainer: {
        flex: 1,
        textAlign: 'left',
        marginLeft: 15,
        marginRight: 15,
        height: 75,
        padding: 0,
    },

    banner1: {
        color: "#000000",
        marginLeft:5,
        fontSize: 34,
        opacity: .7,
    },

    banner2: {
        fontSize: 34,
        marginLeft:5,
        fontWeight: 'bold',
        opacity: .7,
    },

    subtitle: {
        marginLeft:5,
        height: 108,
        marginTop: 12,
        fontSize: 14,
        opacity: .6,
    },

    tos: {
        marginLeft:5,
        marginTop: 5,
        marginLeft: 21.5,
        fontWeight: 'bold',
        fontSize: 18,
        opacity: .7,
    },

    alreadyRegister: {
        fontSize: 15,
        color: "#415FFF",
        textAlign: "center",
        marginBottom: 32,
        marginTop: 10,
    }
})