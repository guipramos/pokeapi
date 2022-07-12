import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

export function Filter(){
    return (
        <View style={styles.filter}>
            <Image source={require('../../assets/icons/filter.png')}/>
            <Image style={{marginHorizontal: 20}} source={require('../../assets/icons/sort.png')}/>
            <Image source={require('../../assets/icons/generation.png')}/>
        </View>
    );
}

const styles = StyleSheet.create({
	filter: {
		paddingTop: 40,
		flexDirection: 'row-reverse'
	}
});