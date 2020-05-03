import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import HomeScreen from '../scenes/home/home';

const Stack = createStackNavigator();

export const HomeNavigator = (): React.ReactElement => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
);
