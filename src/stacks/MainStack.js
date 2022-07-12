import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';

import { Card } from '../components/Card/index'
import { CardScreen } from '../components/CardScreen';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
    initialRouteName='Card'
        screenOptions={{
                headerShown: false
            }
        }
    >
        <Stack.Screen options={{ headerShown: false }} name="Card" component={Card} />
        <Stack.Screen name="CardScreen" component={CardScreen} />
    </Stack.Navigator>        
)
