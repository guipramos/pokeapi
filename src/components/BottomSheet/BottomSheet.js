import React from 'react';
import {View, StyleSheet, Text} from 'react-native'


export function BottomSheet(){
    return (
        <View style={styles.bottomSheetContainer}><Text>sadfsdfsd</Text></View>
    );
}

const styles = StyleSheet.create({
    bottomSheetContainer: {
        height: 500,
        width: '100%',
        backgroundColor: '#000'
    }
})