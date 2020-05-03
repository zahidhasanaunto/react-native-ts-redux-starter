import React from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import Container from '../../components/container';

interface IProps {
    navigation: any;
    user: any;
}

class HomeScreen extends React.Component<IProps, {}> {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Container>
                <Text>Welcome</Text>
                <Text>{JSON.stringify(this.props.user.user)}</Text>
            </Container>
        )
    }

}

const mapStateToProps = (state) => {
    const { user } = state;
    return { user };
};
export default connect(mapStateToProps, null)(HomeScreen);