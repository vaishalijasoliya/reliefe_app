import React, { useRef, useState, useEffect } from 'react';
import { DeviceEventEmitter, StatusBar, StyleSheet, View, TextInput } from 'react-native';
import Constants from '../config/Constants';

const CustInput: (props) => Node = (props) => {

    const { containerStyle, btnText, onPress } = props

    return (
        <View style={[styles.container, containerStyle]}>
            <TextInput
                style={styles.textInput}
                placeholderTextColor={Constants.COLOR_BLACK}
                underlineColorAndroid="transparent"
                {...props} />
        </View>
    );

}

export default CustInput;

const styles = StyleSheet.create({
    textInput : {
        fontSize: 16,
        color: Constants.COLOR_GRAY_TEXT,
        fontFamily: Constants.FONT_REGULAR,
        paddingHorizontal : 10,
        paddingVertical : 15,
    },
    container: {
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: Constants.COLOR_DIVIDER
    }
});
