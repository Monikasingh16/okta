

import React, {Component} from 'react';


import { BrowserRouter as Router, Route,} from 'react-router-dom';

import { OktaAuth } from "@okta/okta-auth-js";


import Home from './Components/Home';

import Staff from './Components/Staff';

import Login from './Components/Login';

 


import Navbar from './Components/Navbar'

import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';




const oktaAuth = new OktaAuth({

  issuer: "https://dev-09999895.okta.com/oauth2/default",
  clientId: "0oan77yam8ztPK7yi5d7",
  redirectUri: window.location.origin + "/login/callback",
  scopes: ["openid", "profile", "email"],
  pkce: true,

});



const restoreOriginalUri = async (_oktaAuth, originalUri) => {
  window.location.replace(originalUri || "/");
};



function onAuthRequired() {
  window.location.replace("/login");  
}






class  App extends Component {
  render() {
  return (
    <Router>

      <Security oktaAuth={oktaAuth}
      restoreOriginalUri={restoreOriginalUri}
       onAuthRequired={onAuthRequired}
       >

    <div>
      <Navbar/>
      <div className='container'>
      <Route path= "/" exact={true} component={Home}/>
      <SecureRoute path="/staff" exact={true} component={Staff}/>
      <Route path="/login" render={()=> <Login
        baseUrl='https://dev-09999895.okta.com'/>} />
        <Route path="/login/callback" component={LoginCallback}/>

      
      </div>
      
    </div>
</Security>
    </Router>
  )
}
}

export default App


