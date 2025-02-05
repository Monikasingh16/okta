

import React, {Component} from 'react';


import { BrowserRouter as Router, Route, } from 'react-router-dom';


import { OktaAuth } from "@okta/okta-auth-js";


import Home from './Components/Home';
import Staff from './Components/Staff';
import Login from './Components/Login';
import Navbar from './Components/Navbar';





import { Security, SecureRoute, LoginCallback } from '@okta/okta-react';






const oktaAuth = new OktaAuth({

  // creating instances

  issuer: "https://dev-09999895.okta.com/oauth2/default",
  clientId: "0oan77yam8ztPK7yi5d7",
  redirectUri: window.location.origin + "/login/callback",
  //  where okta should send the user after login
  scopes: ["openid", "profile", "email"],
  pkce: true,
  
  // pkce --> proof key for the code exchange 
  // csrf attack
});



//  Maintaining the .env file..



const restoreOriginalUri = async (_oktaAuth, originalUri) => {
  window.location.replace(originalUri || "/");
};

//  handle what next after user login



function onAuthRequired() {
  window.location.replace("/login");  
}

//  for the staff route


//  replace ---> push-->






class  App extends Component {
  render() {

  return (
    <Router>

      <Security
       oktaAuth={oktaAuth}
      restoreOriginalUri={restoreOriginalUri}
       onAuthRequired={onAuthRequired}
       >

    <div>

      <Navbar/>
      {/*  displayed on everypage  */}
      

      <div className='container'>
 
      <Route path= "/" exact={true} component={Home}/>

      <SecureRoute path="/staff" exact={true} component={Staff}/>

      <Route path="/login" render={()=> <Login

        baseUrl='https://dev-09999895.okta.com'/>} />
        
        {/*  Renders the Login component and passes the Okta URL for login. */}

        <Route path="/login/callback" component={LoginCallback}/>   

      </div>

    </div>

</Security>
    </Router>
  )
}
}

export default App


