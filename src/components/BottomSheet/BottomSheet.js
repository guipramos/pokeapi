import {View, StyleSheet, Text, Dimensions} from 'react-native'
import React, { useCallback, useEffect, useImperativeHandle } from 'react';
import { GestureDetector, Gesture } from 'react-native-gesture-handler';
import Animated, { Extrapolate, interpolate, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

const { height: SCREEN_HEIGHT } = Dimensions.get('window');
const MAX_TRANSLATE_Y = -SCREEN_HEIGHT + 50;

const BottomSheet = React.forwardRef(
    ({}, ref) => {
    const translateY = useSharedValue(0);
    const scrollTo = useCallback((destination) => {
        'worklet';
        translateY.value = withSpring(destination, { damping: 50 });
    }, []);

    useImperativeHandle(ref, () => ({scrollTo}), [scrollTo]);
    const context = useSharedValue({ y: 0 });
    const gesture = Gesture.Pan()
        .onStart(() => {
            context.value = { y: translateY.value };
        })    
        .onUpdate((event) => {
            translateY.value = event.translationY + context.value.y;
            translateY.value = Math.max(translateY.value, MAX_TRANSLATE_Y);
        })
        .onEnd(() => {
            if(translateY.value > -SCREEN_HEIGHT/3){
                scrollTo(0)
                translateY.value = withSpring(0, { damping: 50 })
            }else if( translateY.value < -SCREEN_HEIGHT/1.5){
                scrollTo(MAX_TRANSLATE_Y)
                translateY.value = withSpring(MAX_TRANSLATE_Y, { damping: 50 })
            }
        })

    useEffect(() => {
        scrollTo(-SCREEN_HEIGHT / 3)
        // translateY.value = withSpring(-SCREEN_HEIGHT / 3, {damping: 50});
    }, []);

    const rBottomSheetStyle = useAnimatedStyle(() => {
        const borderRadius = interpolate(
            translateY.value,
            [MAX_TRANSLATE_Y + 50, MAX_TRANSLATE_Y],
            [25, 5],
            Extrapolate.CLAMP
        )
        return {
            borderRadius,
            transform: [{ translateY: translateY.value}],
        }
    })
    return (
        <GestureDetector gesture={gesture}>
            <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]} >
                <View style={styles.line}></View>
            </Animated.View>
        </GestureDetector>
    )
})

const styles = StyleSheet.create({
    bottomSheetContainer: {
        height: SCREEN_HEIGHT,
        width: '100%',
        backgroundColor: '#000',
        position: 'absolute',
        top: SCREEN_HEIGHT,
        borderRadius: 30,
    },
    line: {
        width: 75,
        height: 6,
        backgroundColor: '#fff',
        alignSelf: 'center',
        marginVertical: - 15,
        borderRadius: 2,
    }
});

export default BottomSheet;