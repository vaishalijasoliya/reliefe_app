import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Platform, Image, Text, TouchableOpacity } from 'react-native';
import type { Node } from 'react';
import Constants from '../config/Constants';
import Strings from '../config/Strings';
import OutlineButton from '../components/OutlineButton';

const Signup2Screen: (props) => Node = (props) => {

    useEffect(() => {
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Constants.COLOR_WHITE} barStyle={'dark-content'} />
            <View style={styles.mainView}>
                <Text style={styles.joinComm}>{Strings.joinComm}</Text>
                <Text style={styles.loginMsg}>{Strings.joinComm1}</Text>
                <TouchableOpacity
                    onPress={() => props.navigation.navigate('Signup3')}
                    style={styles.btnContainerStyle}>
                    <Text style={styles.btnText}>{'Next'}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

export default Signup2Screen;

const styles = StyleSheet.create({
    btnText: {
        fontSize: 21,
        padding: 8,
        alignSelf: 'center',
        color: Constants.COLOR_GRAY_TEXT,
        fontFamily: Constants.FONT_REGULAR,
        fontWeight: '400'
    },
    btnContainerStyle: {
        width: '80%',
        borderWidth: 0.8,
        marginTop: 15,
        borderColor: Constants.COLOR_GRAY_TEXT
    },
    joinComm: {
        fontSize: 35,
        alignSelf: 'center',
        textAlign: 'center',
        color: Constants.COLOR_GRAY_TEXT,
        fontWeight: '400',
        fontFamily: Constants.FONT_REGULAR
    },
    loginMsg: {
        fontSize: 14,
        marginTop: 15,
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
