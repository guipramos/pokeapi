import React, { useCallback, useRef } from 'react';
import {View, StyleSheet, Image} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export function Filter({onPress}){
    return (
        <View style={styles.filter}>
            <TouchableOpacity onPress={onPress}>
                <Image source={require('../../assets/icons/filter.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={{marginHorizontal: 20}} source={require('../../assets/icons/sort.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image source={require('../../assets/icons/generation.png')}/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
	filter: {
		paddingTop: 40,
		flexDirection: 'row-reverse'
	}
});