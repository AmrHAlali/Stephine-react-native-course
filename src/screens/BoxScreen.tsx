import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.viewStyle}>
            <View style={styles.viewOneStyle} />
            <View style={styles.viewTwoStyle} />
            <View style={styles.viewThreeStyle} />
        </View>
    );
};

const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: "black",
        height: 200,
    },
    viewOneStyle: {
        backgroundColor: "red",
        alignSelf: "flex-start",
        height: 50,
        width: 50,
    },
    viewTwoStyle: {
        backgroundColor: "green",
        alignSelf: "center",
        height: 50,
        width: 50,
    },
    viewThreeStyle: {
        backgroundColor: "purple",
        alignSelf: "flex-end",
        position: "absolute",
        height: 50,
        width: 50
    },
});

export default BoxScreen;