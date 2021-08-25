import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Platform } from 'react-native';
import type { Node } from 'react';
import Constants from '../config/Constants';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';

const SplashScreen: (props) => Node = (props) => {

    useEffect(() => {
        Constants.ROOT_NAVIGATION = props.navigation;

        setTimeout(() => {
            props.navigation.navigate('Signup1')
        }, 2000);
    }, [])

    return (
        <>
            {Platform.OS == 'android' ?
                <SafeAreaView style={styles.container}>
                    <StatusBar backgroundColor={Constants.COLOR_WHITE} barStyle={'dark-content'} />
                    <ImageBackground
                        style={styles.container}
                        resizeMode={'cover'}
                        source={require('../assets/images/splash_screen.png')} />
                </SafeAreaView> :
                <ImageBackground
                    style={styles.container}
                    resizeMode={'cover'}
                    source={require('../assets/images/splash_screen.png')} />}
        </>
    );

}

export default SplashScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        backgroundColor: 'white'
    }
});
