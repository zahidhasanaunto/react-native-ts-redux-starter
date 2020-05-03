import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import React from 'react';
import RootNavigator from './root';

const navigatorTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'transparent',
    },
};

export const AppNavigator = (): React.ReactElement => (
    <NavigationContainer theme={navigatorTheme}>
        <RootNavigator />
    </NavigationContainer>
);
