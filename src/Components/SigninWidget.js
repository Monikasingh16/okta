
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { OktaSignIn } from '@okta/okta-signin-widget';
import '@okta/okta-signin-widget/css/okta-sign-in.min.css';

// Custom component --> UI 


class SignInWidget extends Component {
    componentDidMount() {
        const el = ReactDOM.findDOMNode(this);
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
        
    }
}


export default SignInWidget;








