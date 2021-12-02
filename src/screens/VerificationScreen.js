import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Platform, Text, TouchableOpacity, ImageBackground, ScrollView } from 'react-native';
import type { Node } from 'react';
import Constants from '../config/Constants';
import Strings from '../config/Strings';
import OutlineButton from '../components/OutlineButton';
import CustInput from '../components/CustInput';
import CustButton from '../components/CustButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Image from 'react-native-scalable-image';

const VerificationScreen: (props) => Node = (props) => {
    const insets = useSafeAreaInsets();
    const [enterOtp, setOtp] = useState('')

    useEffect(() => {
    }, [])

    return (
        <ImageBackground
            source={require('../assets/images/splash_screen.png')}
            resizeMode={'cover'}
            style={[styles.mainView, { paddingTop: insets.top, paddingBottom: Math.max(insets.bottom, 16) }]}>
            <Image
                width={Constants.windowWidth * 0.50}
                source={require('../assets/images/logo.png')}
                resizeMode='contain'
                style={styles.logoImage} />
            <Text style={styles.joinComm}>{Strings.verification}</Text>
            <View style={styles.dividerView} />
            <Text style={styles.loginMsg}>{Strings.otpMsg}</Text>
            <CustInput
                containerStyle={styles.inputContainer}
                placeholder={Strings.enterOtp}
                autoCapitalize={'none'}
                value={enterOtp}
                keyboardType={'numeric'}
                onChangeText={setOtp} />
            <Text style={[styles.loginMsg, { alignSelf: 'flex-start' }]}>
                {Strings.otpMsg1}
                <Text
                    onPress={(e) => {
                        console.log('click here...')
                    }}
                    style={[styles.loginMsg, { color: Constants.COLOR_PRIMARY }]}>
                    {' ' + Strings.otpMsg2}
                </Text>
            </Text>
            <OutlineButton
                onPress={() => { }}
                btnText={'Next'}
                containerStyle={styles.btnStyle} />
        </ImageBackground>
    );
}

export default VerificationScreen;

const styles = StyleSheet.create({
    logoImage: {
        alignSelf: 'center',
        marginTop: Constants.windowHeight * 0.05
    },
    loginMsg: {
        fontSize: 14,
        marginTop: 15,
        alignSelf: 'center',
        textAlign: 'center',
        fontWeight: '400',
        color: Constants.COLOR_BLACK,
        fontFamily: Constants.FONT_REGULAR
    },
    btnStyle: {
        width: '100%',
        alignSelf: 'center',
        marginTop: 20,
    },
    dividerView: {
        width: 180,
        marginTop: 5,
        height: 1,
        alignSelf: 'center',
        backgroundColor: Constants.COLOR_DIVIDER
    },
    inputContainer: {
        marginTop: 25,
        width: '100%'
    },
    joinComm: {
        fontSize: 32,
        alignSelf: 'center',
        marginTop: Constants.windowHeight * 0.03,
        textAlign: 'center',
        color: Constants.COLOR_BLACK,
        fontWeight: '400',
        fontFamily: Constants.FONT_REGULAR
    },
    mainView: {
        flex: 1,
        paddingHorizontal: 25,
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});
