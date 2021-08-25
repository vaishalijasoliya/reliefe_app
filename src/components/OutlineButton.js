import React, { useRef, useState, useEffect } from 'react';
import { DeviceEventEmitter, StatusBar, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Constants from '../config/Constants';

const OutlineButton: (props) => Node = (props) => {

    const { containerStyle, btnText, onPress } = props

    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, containerStyle]}>
            <Text style={styles.btnText}>{btnText}</Text>
        </TouchableOpacity>
    );

}

export default OutlineButton;

const styles = StyleSheet.create({
    btnText : {
        fontSize : 25,
        padding : 12,
        alignSelf : 'center',
        color : Constants.COLOR_GRAY_TEXT,
        fontFamily : Constants.FONT_REGULAR,
        fontWeight : '400'
    },
    container: {
        borderRadius : 40,
        borderWidth : 1,
        borderColor : Constants.COLOR_GRAY_TEXT
    }
});
