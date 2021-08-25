import React, { useRef, useState, useEffect } from 'react';
import { DeviceEventEmitter, StatusBar, StyleSheet, View } from 'react-native';

const RootComponent: (props) => Node = (props) => {


    return (
        <View style={styles.container}>
            {props.children}
        </View>
    );

}

export default RootComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
