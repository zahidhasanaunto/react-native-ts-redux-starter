import React from 'react';
import { View } from 'react-native';

export default class Container extends React.Component {
    render() {
        return (
            <View style={{ backgroundColor: 'white', flex: 1 }}>
                <View style={{ flex: 1 }}>
                    {this.props.children}
                </View>
            </View>
        )
    }
}