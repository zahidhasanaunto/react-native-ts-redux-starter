import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import LoginScreen from '../scenes/login/login';

const Stack = createStackNavigator();

export const LoginNavigator = (): React.ReactElement => (
    <Stack.Navigator headerMode='none'>
        <Stack.Screen name='Login' component={LoginScreen} />
    </Stack.Navigator>
);
