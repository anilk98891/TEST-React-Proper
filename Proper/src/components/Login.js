import React, { Component } from 'react'
import { View , Text} from 'react-native'
import { Button, Card, CardSection, FieldInput, Spinner } from '../common';

class LoginForm extends Component {
    state = { email: '', password: '', error: '', loading: false };

    onButtonPress() {
        const { email, password } = this.state;
        this.setState({ error: '', loading: true });
        this.onLoginSuccess()
    };

    onLoginFail(){
        this.setState({error: 'Authentication Failed', loading : false});
    }

    onLoginSuccess() {
        this.setState({
            email : '',
            password: '',
            error: '',
            loading : false
        });
        this.props.navigation.navigate('Home', {data : "Anil"});
    }

    renderButton() {
        return(
            <Button onPress={this.onButtonPress.bind(this)}>
                Log in
            </Button>
         );
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <FieldInput
                        placeHoldertext='user@gmail.com'
                        labelProp="Email"
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                </CardSection>
                <CardSection>
                    <FieldInput
                        secureTextEntry='true'
                        placeHoldertext='password'
                        labelProp="Password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })} />
                </CardSection>
                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>

            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        fontColor: 'red',
        alignSelf: 'center'
    }
}

export default LoginForm;