
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// redirect the user onces successfull autheciated

import SigninWidget from './SigninWidget';
import { withOktaAuth } from '@okta/okta-react';


class Login extends Component {
    constructor(props){
        super(props);
        this.state ={
            authenticated: null
        };
        this.checkAuthentication();
    }

    // this.checkAuthentication();

    async checkAuthentication() {
        const authenticated = await this.props.oktaAuth.isAuthenticated();
        if (authenticated !== this.state.authenticated) {
            this.setState({ authenticated });
        }
    }

    componentDidUpdate(){
        this.checkAuthentication();
    }

    onSuccess = (res) => {
        return this.props.oktaAuth.signInWithRedirect({
            sessionToken: res.session.token
        });
    }

    onError = (err) => {
        console.log('Error logging in:', err);
    }

    render() {
        if (this.state.authenticated === null) return null;
        return this.state.authenticated ? 
            <Redirect to={{ pathname: '/' }} /> :
            <SigninWidget
                baseUrl={this.props.baseUrl}
                onSuccess={this.onSuccess}
                onError={this.onError}
            />;
    }
}

export default withOktaAuth(Login);
