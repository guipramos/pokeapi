import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import BottomSheet from './src/components/BottomSheet/BottomSheet';

import MainStack from './src/stacks/MainStack';

export function App() {
  return (      
    <GestureHandlerRootView style={{ flex: 1}}>
      <NavigationContainer>
        <MainStack />
        <BottomSheet />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};