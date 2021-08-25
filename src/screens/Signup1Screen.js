import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Platform, Image, Text, TouchableOpacity } from 'react-native';
import type { Node } from 'react';
import Constants from '../config/Constants';
import Strings from '../config/Strings';
import OutlineButton from '../components/OutlineButton';

const Signup1Screen: (props) => Node = (props) => {

    useEffect(() => {
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Constants.COLOR_WHITE} barStyle={'dark-content'} />
            <View style={styles.mainView}>
                <Image
                    style={styles.logoView}
                    resizeMode={'cover'}
                    source={require('../assets/images/splash_screen.png')} />
            </View>
            <OutlineButton
                onPress={() => props.navigation.navigate('Signup2')}
                btnText={'SIGN UP'}
                containerStyle={styles.btnStyle} />
            <TouchableOpacity
                onPress={() => { props.navigation.navigate('Login') }}>
                <Text style={styles.loginMsg}>{Strings.loginMsg}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

export default Signup1Screen;

const styles = StyleSheet.create({
    btnStyle: {
        width: '70%',
        alignSelf: 'center'
    },
    loginMsg: {
        fontSize: 20,
        marginTop: 20,
        alignSelf: 'center',
        textAlign: 'center',
        marginBottom: 15,
        color: Constants.COLOR_GRAY_TEXT,
        fontFamily: Constants.FONT_REGULAR
    },
    logoView: {
        width: Constants.windowWidth * 0.65,
        height: Constants.windowWidth * 0.65,
        borderRadius: Constants.windowWidth * 0.325
    },
    mainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});
