import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Platform, Image, Text, TouchableOpacity, ScrollView } from 'react-native';
import type { Node } from 'react';
import Constants from '../config/Constants';
import Strings from '../config/Strings';
import OutlineButton from '../components/OutlineButton';
import CustInput from '../components/CustInput';
import CustButton from '../components/CustButton';
import ApiServices from '../config/ApiServices';
import ApiEndPoint from '../config/ApiEndPoint';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen: (props) => Node = (props) => {


    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    useEffect(() => {
    }, [])

    const onLoginPress = async () => {
        console.log('press...');

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
        if(!!data && data.status) {
            Constants.USER_DATA = data.userData;
            Constants.USER_DATA.token = data.token;
            AsyncStorage.setItem(Constants.USER_TOKEN, data.token);
            console.log(data.token);
            Constants.showLoader.hideLoader()
        } else {
            Constants.showLoader.hideLoader()
            Constants.showDialog.showErrorDialog('Error', data.message);
        }
    }

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={Constants.COLOR_WHITE} barStyle={'dark-content'} />
            <View
                showsVerticalScrollIndicator={false}
                bounces={false}
                style={styles.mainView}>
                <Text style={styles.joinComm}>{Strings.login}</Text>
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
                <Text style={[styles.loginMsg, { alignSelf: 'flex-start' }]}>{Strings.forgetPass}</Text>
                <OutlineButton
                    onPress={onLoginPress}
                    btnText={'Next'}
                    containerStyle={styles.btnStyle} />
            </View>
        </SafeAreaView>
    );
}

export default LoginScreen;

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
        width: '70%',
        alignSelf: 'center',
        marginTop: 40,
        position: 'absolute',
        bottom: 25
    },
    inputContainer: {
        marginTop: 25
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
        paddingHorizontal: 25,
        paddingTop: 40
    },
    container: {
        flex: 1,
        backgroundColor: 'white'
    }
});
