import React, { useRef, useState, useEffect } from 'react';
import { DeviceEventEmitter, StatusBar, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import Constants from '../config/Constants';

const CustButton: (props) => Node = (props) => {

    const { containerStyle, btnText, onPress } = props

    return (
        <TouchableOpacity onPress={onPress} style={[styles.container, containerStyle]}>
            <Text style={styles.btnText}>{btnText}</Text>
        </TouchableOpacity>
    );

}

export default CustButton;

const styles = StyleSheet.create({
    btnText : {
        fontSize : 25,
        padding : 12,
        alignSelf : 'center',
        color : Constants.COLOR_WHITE,
        fontFamily : Constants.FONT_REGULAR
    },
    container: {
        borderRadius : 40,
        backgroundColor : Constants.COLOR_BLACK
    }
});
