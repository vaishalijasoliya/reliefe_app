import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Platform, Text, TouchableOpacity, ImageBackground } from 'react-native';
import type { Node } from 'react';
import Constants from '../config/Constants';
import Strings from '../config/Strings';
import OutlineButton from '../components/OutlineButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Image from 'react-native-scalable-image';

const Signup1Screen: (props) => Node = (props) => {
    const insets = useSafeAreaInsets();
    useEffect(() => {
    }, [])

    return (
        <ImageBackground
            source={require('../assets/images/splash_screen.png')}
            resizeMode={'cover'}
            style={[styles.mainView, { paddingTop: insets.top, paddingBottom: Math.max(insets.bottom, 16) }]}>
            <Image
                width={Constants.windowWidth * 0.65}
                source={require('../assets/images/logo.png')}
                resizeMode='contain'
                style={styles.logoView} />
            <View style={{ height: '12%' }} />
            <View style={styles.bottomView}>
                <OutlineButton
                    onPress={() => props.navigation.navigate('Signup2')}
                    btnText={'SIGN UP'}
                    containerStyle={styles.btnStyle} />
                <TouchableOpacity
                    onPress={() => { props.navigation.navigate('Login') }}>
                    <Text style={styles.loginMsg}>
                        {Strings.loginMsg}
                        <Text style={[styles.loginMsg, { color: Constants.COLOR_PRIMARY }]}>{Strings.login}</Text>
                        {' ' + Strings.loginMsg1}
                    </Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

export default Signup1Screen;

const styles = StyleSheet.create({
    bottomView: {
        position: 'absolute',
        bottom: 50,
        width: '100%'
    },
    btnStyle: {
        width: '60%',
        alignSelf: 'center'
    },
    loginMsg: {
        fontSize: 20,
        marginTop: 40,
        lineHeight: 30,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: '400',
        color: Constants.COLOR_BLACK,
        fontFamily: Constants.FONT_REGULAR
    },
    logoView: {
        alignSelf: 'center'
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
