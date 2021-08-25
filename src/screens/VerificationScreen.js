import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Platform, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import type { Node } from 'react';
import Constants from '../config/Constants';
import Strings from '../config/Strings';
import OutlineButton from '../components/OutlineButton';
import CustInput from '../components/CustInput';
import CustButton from '../components/CustButton';

const VerificationScreen: (props) => Node = (props) => {

    const [enterOtp, setOtp] = useState('')

    useEffect(() => {
    }, [])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Constants.COLOR_WHITE} barStyle={'dark-content'} />
            <View style={styles.mainView}>
                <Text style={styles.joinComm}>{Strings.verification}</Text>
                <Text style={styles.loginMsg}>{Strings.otpMsg}</Text>
                <CustInput
                    containerStyle={styles.inputContainer}
                    placeholder={Strings.enterOtp}
                    autoCapitalize={'none'}
                    value={enterOtp}
                    keyboardType={'numeric'}
                    onChangeText={setOtp} />
                <Text style={[styles.loginMsg, { alignSelf: 'flex-start' }]}>{Strings.otpMsg1}</Text>
                <CustButton
                    onPress={() => {}}
                    btnText={'Register'}
                    containerStyle={styles.btnStyle} />
            </View>
        </SafeAreaView>
    );
}

export default VerificationScreen;

const styles = StyleSheet.create({
    loginMsg: {
        fontSize: 15,
        marginTop: 15,
        alignSelf: 'center',
        textAlign: 'center',
        color: Constants.COLOR_GRAY_TEXT,
        fontFamily: Constants.FONT_REGULAR
    },
    btnStyle: {
        width: '60%',
        alignSelf: 'center',
        marginTop: 30,
        borderRadius: 20
    },
    inputContainer: {
        marginTop: 25,
        width: '100%'
    },
    joinComm: {
        fontSize: 32,
        alignSelf: 'center',
        marginTop: 5,
        textAlign: 'center',
        color: Constants.COLOR_GRAY_TEXT,
        fontWeight: '400',
        fontFamily: Constants.FONT_REGULAR
    },
    mainView: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});
