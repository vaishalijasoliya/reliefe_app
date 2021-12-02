import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Platform, Image, Text, TouchableOpacity, ScrollView, ImageBackground } from 'react-native';
import type { Node } from 'react';
import Constants from '../config/Constants';
import Strings from '../config/Strings';
import OutlineButton from '../components/OutlineButton';
import CustInput from '../components/CustInput';
import CustButton from '../components/CustButton';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const Signup3Screen: (props) => Node = (props) => {
    const insets = useSafeAreaInsets();
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [mobileNumber, setMobile] = useState('')
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [cnfPassword, setCnfPass] = useState('')

    useEffect(() => {
    }, [])

    return (
        <ImageBackground
            source={require('../assets/images/splash_screen.png')}
            resizeMode={'cover'}
            style={[styles.mainView, { paddingTop: insets.top, paddingBottom: Math.max(insets.bottom, 16) }]}>
            <ScrollView
                showsVerticalScrollIndicator={false}
                bounces={false}>
                <Text style={styles.joinComm}>{Strings.signUP}</Text>
                <CustInput
                    containerStyle={styles.inputContainer}
                    placeholder={Strings.firstName}
                    autoCapitalize={'none'}
                    value={firstName}
                    keyboardType={'default'}
                    onChangeText={setFirstName} />
                <CustInput
                    containerStyle={styles.inputContainer}
                    placeholder={Strings.lastName}
                    autoCapitalize={'none'}
                    value={lastName}
                    keyboardType={'default'}
                    onChangeText={setLastName} />
                <CustInput
                    containerStyle={styles.inputContainer}
                    placeholder={Strings.mobileNumber}
                    autoCapitalize={'none'}
                    value={mobileNumber}
                    keyboardType={'numeric'}
                    onChangeText={setMobile} />
                <CustInput
                    containerStyle={styles.inputContainer}
                    placeholder={Strings.emailId}
                    autoCapitalize={'none'}
                    value={email}
                    keyboardType={'email-address'}
                    onChangeText={setEmail} />
                <CustInput
                    containerStyle={styles.inputContainer}
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
                <CustInput
                    containerStyle={styles.inputContainer}
                    placeholder={Strings.cnfPassword}
                    autoCapitalize={'none'}
                    value={cnfPassword}
                    secureTextEntry={true}
                    keyboardType={'default'}
                    onChangeText={setCnfPass} />
                <OutlineButton
                    onPress={() => props.navigation.navigate('Verify')}
                    btnText={'Next'}
                    containerStyle={styles.btnStyle} />
            </ScrollView>
        </ImageBackground>
    );
}

export default Signup3Screen;

const styles = StyleSheet.create({
    btnStyle: {
        width: '100%',
        alignSelf: 'center',
        marginTop: 40
    },
    inputContainer: {
        marginTop: 30
    },
    joinComm: {
        fontSize: 30,
        alignSelf: 'center',
        marginTop: 10,
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
