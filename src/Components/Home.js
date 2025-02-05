// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import { withAuth } from '@okta/okta-react';

// export default withAuth(class Home extends Component {
//     constructor(props){
//         super(props);
//         this.state = { autheticated:null };
//         this.checkAuthentication = this.checkAuthentication.bind(this);
//         this.login = this.login.bind(this);
//         this.logout = this.logout.bind(this);
        
//     }

//     async checkAuthentication(){
//         const authenticated = await this.props.auth.isAuthenticated();
//         if (auhenticated !== this.state.authenticated) {
//             this.setState({ authenticated });
//         }
//     }

//     async componentDidMount() {
//         this.checkAuthentication();
//     }

//     async componentDidUpdate(){
//         this.checkAuthentication();
//     }

// login = async() => {
//         this.props.auth.login('/');
//     }

//  logout= async() => {
//         this.props.auth.logout('/');
//     }


//     render(){
//         if (this.state.autheticated === null) return null;

//         const mainContent = this.state.authenticated ? (
//             <div>
//                 <p className="lead">you have entered the staff portal, <Link to="/staff">click here</Link></p>
//                 <button className="btn btn-light btn-lg" onClick={this.logout}>Logout</button>

//             </div>
         
//         ):(
//             <div>
//                   <p className="lead">if you are a staff member, please get your credentials from your supervisor</p>
//                   <button className="btn btn-light btn-lg" onClick={this.login}>Logout</button>

//             </div>
           
//         );

//         return (
//           <div className="jumbotron">
//             <h1 className="display-4">Acen Staff Portal</h1>
//             {mainContent}

//           </div>
//         );
      

//     }



// });













//  new code from here...




import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withOktaAuth } from '@okta/okta-react'; 

class Home extends Component {
    constructor(props){
        super(props);
        this.state = { authenticated: null }; 
        this.checkAuthentication = this.checkAuthentication.bind(this);
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
    }

    async checkAuthentication(){
        const authenticated = await this.props.oktaAuth.isAuthenticated(); 
        if (authenticated !== this.state.authenticated) {
            this.setState({ authenticated });
        }
    }

    async componentDidMount() {
        this.checkAuthentication();
    }

    async componentDidUpdate(){
        this.checkAuthentication();
    }

    login = async () => {
        await this.props.oktaAuth.signInWithRedirect(); 
    }

    logout = async () => {
        await this.props.oktaAuth.signOut(); 
    }

    render(){
        if (this.state.authenticated === null) return null;

        const mainContent = this.state.authenticated ? (
            <div>
                <p className="lead">
                    You have entered the staff portal, <Link to="/staff">click here</Link>
                </p>
                <button className="btn btn-light btn-lg" onClick={this.logout}>Logout</button>
            </div>
        ) : (
            <div>
                <p className="lead">
                    If you are a staff member, please get your credentials from your supervisor.
                </p>
                <button className="btn btn-light btn-lg" onClick={this.login}>Login</button>
            </div>
        );

        return (
            <div className="jumbotron">
                <h1 className="display-4">Miracle software systems</h1>
                {mainContent}
            </div>
        );
    }
}

export default withOktaAuth(Home); 
