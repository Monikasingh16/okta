
import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

// redirect the user onces successfull autheciated

import SigninWidget from './SigninWidget'; 

//  custom component 

import { withOktaAuth } from '@okta/okta-react';

// Uses withOktaAuth() to get authentication-related methods (isAuthenticated, signInWithRedirect, etc.).

//  higher order autheication provides the authecations related props

//  class based component declarations

class Login extends Component {
    // withoktaauth
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

        // oktaAuth is provided via withOktaAuth(Login), and this method checks if the user is logged in.

        if (authenticated !== this.state.authenticated)
        {
            this.setState({ authenticated });
        }
    }


    componentDidUpdate(){

        //  this runs when the compoenent updates(re-renders)

        this.checkAuthentication();
    }



    onSuccess = (res) => {
        return this.props.oktaAuth.signInWithRedirect({
            sessionToken: res.session.token

            //  Receives a session token after successful login.

        });
    }

    onError = (err) => {
        console.log('Error logging in:', err);
    }


    //  Rendering the component..
    render() {
        if (this.state.authenticated === null) 
            return null;

        //  ternary operator

        return this.state.authenticated ? 
        // true
            <Redirect to={{ pathname: '/' }} /> :  
            // false
            <SigninWidget
                baseUrl={this.props.baseUrl}  //the okta authentication server URL
                onSuccess={this.onSuccess}    //funtion to handle successful login
                onError={this.onError}        // function to handle the login errors
            />;
    }
}

export default withOktaAuth(Login);

//  wraps the login component with the Okta's authecation functionlaity

