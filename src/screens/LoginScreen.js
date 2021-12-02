import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Platform, Text, TouchableOpacity, ImageBackground } from 'react-native';
import type { Node } from 'react';
import Constants from '../config/Constants';
import Strings from '../config/Strings';
import OutlineButton from '../components/OutlineButton';
import CustInput from '../components/CustInput';
import CustButton from '../components/CustButton';
import ApiServices from '../config/ApiServices';
import ApiEndPoint from '../config/ApiEndPoint';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Image from 'react-native-scalable-image';

const LoginScreen: (props) => Node = (props) => {
    const insets = useSafeAreaInsets();

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
    }, [])

    const onLoginPress = async () => {

        if (!username) {
            Constants.showDialog.showErrorDialog('Error', 'Please enter valid username.');
            return;
        }

        if (!password) {
            Constants.showDialog.showErrorDialog('Error', 'Please enter valid password.');
            return;
        }

        var payload = {
            "user_name": username,
            "password": password
        }
        Constants.showLoader.showLoader()
        var data = await ApiServices.PostApiCall(ApiEndPoint.LOGIN, JSON.stringify(payload))
        if (!!data && data.status) {
            Constants.USER_DATA = data.userData;
            Constants.USER_DATA.token = data.token;
            AsyncStorage.setItem(Constants.USER_TOKEN, data.token);
            Constants.showLoader.hideLoader()
        } else {
            Constants.showLoader.hideLoader()
            Constants.showDialog.showErrorDialog('Error', data.message);
        }
    }

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
            <Text style={styles.joinComm}>{Strings.login}</Text>
            <View style={styles.dividerView} />
            <CustInput
                containerStyle={[styles.inputContainer, { marginTop: 40 }]}
                placeholder={Strings.userName}
                autoCapitalize={'none'}
                value={username}
                keyboardType={'default'}
                onChangeText={setUsername} />
            <CustInput
                containerStyle={styles.inputContainer}
                placeholder={Strings.password}
                autoCapitalize={'none'}
                value={password}
                secureTextEntry={true}
                keyboardType={'default'}
                onChangeText={setPassword} />
            <Text style={[styles.loginMsg, { alignSelf: 'flex-end' }]}>{Strings.forgetPass}</Text>
            <OutlineButton
                onPress={onLoginPress}
                btnText={'Next'}
                containerStyle={styles.btnStyle} />
            <TouchableOpacity
                style={[styles.bottomText, { bottom: Math.max(insets.bottom, 16) + 25 }]}
                onPress={() => { props.navigation.navigate('Signup1') }}>
                <Text style={[styles.loginMsg, { marginTop: Constants.windowHeight * 0.06, color: Constants.COLOR_BLACK }]}>
                    {Strings.signupMsg}
                    <Text style={[styles.loginMsg, { color: Constants.COLOR_PRIMARY }]}>
                        {' ' + Strings.joinNow}
                    </Text>
                </Text>
            </TouchableOpacity>
        </ImageBackground >
    );
}

export default LoginScreen;

const styles = StyleSheet.create({
    bottomText: {
        position: 'absolute',
        alignSelf: 'center'
    },
    dividerView: {
        width: 90,
        marginTop: 5,
        height: 1,
        alignSelf: 'center',
        backgroundColor: Constants.COLOR_DIVIDER
    },
    logoImage: {
        alignSelf: 'center',
        marginTop: Constants.windowHeight * 0.05
    },
    loginMsg: {
        fontSize: 15,
        marginTop: 15,
        alignSelf: 'center',
        textAlign: 'center',
        color: Constants.COLOR_BLACK,
        fontFamily: Constants.FONT_REGULAR
    },
    btnStyle: {
        width: '100%',
        alignSelf: 'center',
        marginTop: 30
    },
    inputContainer: {
        marginTop: 25
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
        paddingHorizontal: 25
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});
