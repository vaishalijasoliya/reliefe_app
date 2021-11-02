import React, { useRef, useState, useEffect } from 'react';
import { StyleSheet, View, SafeAreaView, StatusBar, Platform } from 'react-native';
import type { Node } from 'react';
import Constants from '../config/Constants';
import ImageBackground from 'react-native/Libraries/Image/ImageBackground';
import OpacityDotsLoader from '../components/OpacityDotsLoader';
import Image from 'react-native-scalable-image';

const SplashScreen: (props) => Node = (props) => {

    useEffect(() => {
        Constants.ROOT_NAVIGATION = props.navigation;

        setTimeout(() => {
            props.navigation.navigate('Login')
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
                        source={require('../assets/images/splash_screen.png')} >
                        <Image
                            width={Constants.windowWidth * 0.65}
                            source={require('../assets/images/logo.png')}
                            resizeMode='contain'
                            style={styles.logoImage} />
                        <OpacityDotsLoader
                            size={15}
                            style={styles.loaderStyle}
                            betweenSpace={12}
                            speed={100} />
                    </ImageBackground>
                </SafeAreaView> :
                <ImageBackground
                    style={styles.container}
                    resizeMode={'cover'}
                    source={require('../assets/images/splash_screen.png')} >
                    <Image
                        width={Constants.windowWidth * 0.65}
                        source={require('../assets/images/logo.png')}
                        resizeMode='contain'
                        style={styles.logoImage} />
                    <OpacityDotsLoader
                        size={15}
                        style={styles.loaderStyle}
                        betweenSpace={12}
                        speed={100} />
                </ImageBackground>}
        </>
    );

}

export default SplashScreen;

const styles = StyleSheet.create({
    loaderStyle: {
        marginTop: 20,
        alignSelf: 'center'
    },
    logoImage: {
        alignSelf: 'center'
    },
    container: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        backgroundColor: 'white'
    }
});
