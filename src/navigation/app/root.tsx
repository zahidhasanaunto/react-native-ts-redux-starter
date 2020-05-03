import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { LoginNavigator } from '../login';
import { HomeNavigator } from '../home';

const Stack = createStackNavigator();

class RootNavigator extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Stack.Navigator headerMode='none'>
                <Stack.Screen name='Login' component={LoginNavigator} />
                <Stack.Screen name='Home' component={HomeNavigator} />
            </Stack.Navigator>
        );
    }
}

export default RootNavigator;

