import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Platform, Text, TouchableOpacity, ImageBackground } from 'react-native';
import type { Node } from 'react';
import Constants from '../config/Constants';
import Strings from '../config/Strings';
import OutlineButton from '../components/OutlineButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Image from 'react-native-scalable-image';

const Signup2Screen: (props) => Node = (props) => {
    const insets = useSafeAreaInsets();
    useEffect(() => {
    }, [])

    return (
        <ImageBackground
            source={require('../assets/images/community.png')}
            resizeMode={'cover'}
            style={[styles.mainView, { paddingTop: insets.top, paddingBottom: Math.max(insets.bottom, 16) }]}>
            <View style={[styles.topView, { top: insets.top }]}>
                <Image
                    width={Constants.windowWidth * 0.55}
                    source={require('../assets/images/logo.png')}
                    resizeMode='contain'
                    style={styles.logoView} />
                <Text style={styles.joinComm}>{Strings.joinComm}</Text>
                <Text style={styles.loginMsg}>{Strings.joinComm1}</Text>
            </View>
            <View style={{ height: '20%' }} />
            <OutlineButton
                onPress={() => props.navigation.navigate('Signup3')}
                btnText={'Next'}
                containerStyle={styles.btnContainerStyle} />
        </ImageBackground>
    );
}

export default Signup2Screen;

const styles = StyleSheet.create({
    topView: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        width: '100%',
        alignItems: 'center'
    },
    logoView: {
        marginTop: 50,
    },
    btnText: {
        fontSize: 21,
        padding: 8,
        alignSelf: 'center',
        color: Constants.COLOR_GRAY_TEXT,
        fontFamily: Constants.FONT_REGULAR,
        fontWeight: '400'
    },
    btnContainerStyle: {
        width: '50%',
        borderWidth: 0.8,
        marginTop: 15,
        borderColor: Constants.COLOR_GRAY_TEXT
    },
    joinComm: {
        fontSize: 35,
        alignSelf: 'center',
        marginTop: 22,
        textAlign: 'center',
        color: Constants.COLOR_BLACK,
        fontWeight: '400',
        fontFamily: Constants.FONT_REGULAR
    },
    loginMsg: {
        fontSize: 12,
        lineHeight: 18,
        marginTop: 10,
        alignSelf: 'center',
        textAlign: 'center',
        marginBottom: 15,
        fontWeight: '400',
        color: Constants.COLOR_BLACK,
        fontFamily: Constants.FONT_REGULAR
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
