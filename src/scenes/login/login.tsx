import React from 'react';
import { Button } from 'react-native';
import { connect } from 'react-redux';
import Container from '../../components/container';
import { setUser } from '../../store/actions/userActions';


interface IProps {
    navigation: any;
    setUser(user: any): any;
}

class LoginScreen extends React.Component<IProps, {}> {

    constructor(props) {
        super(props);
    }

    onPressLogin = () => {
        this.props.setUser({ name: 'Zahid Hasan', email: 'Zahidhasan065@gmail.com' })
        this.props.navigation.navigate('Home');
    }

    render() {
        return (
            <Container>
                <Button onPress={this.onPressLogin} title='Login' />
            </Container>
        )
    }

}

const mapStateToProps = (state) => {
    const { user } = state;
    return { user };
};
const mapDispatchToProps = {
    setUser: setUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);