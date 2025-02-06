
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { OktaSignIn } from '@okta/okta-signin-widget';

// Imports the Okta Sign-In Widget, which provides a pre-built UI for user authentication.

import '@okta/okta-signin-widget/css/okta-sign-in.min.css';




class SignInWidget extends Component {

    componentDidMount() {
        //  Widget initializations

        const el = ReactDOM.findDOMNode(this);

        // ReactDOM.findDOMNode(this) finds the actual HTML element where the widget should be rendered.
        // this refers to the SignInWidget component.
        // el holds the reference to this HTML element.

        this.widget = new OktaSignIn({
            baseUrl: this.props.baseUrl
        });

        this.widget.renderEl({ el }, this.props.onSuccess, this.props.onError);
    }

    componentWillUnmount() {
        this.widget.remove();
    }

    render() {

        return <div />;

        // The Okta widget will be injected into this <div> dynamically using renderEl() in componentDidMount().
        
        // The <div> is necessary because findDOMNode(this) needs a real DOM element to attach the widget.

    }
}


export default SignInWidget;








