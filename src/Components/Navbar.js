import React, { Component } from 'react';

import { Link } from 'react-router-dom';


 class Navbar extends Component {

  render() {
    return (

      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
            <div className="container">

                <Link className="navbar-brand" to="/">Miracle software systems
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle= "collapse"
                    data-target="#navbarNav"
                    >
                        
                        <span className="navbar-toggler-icon"/>
                </button>

                {/* navbar navbar-expand-sm */}

                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar nav ml-auto">
                 

                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>

                        <li className="nav-item">
                            <Link className="nav-link" to="/staff">Staff</Link>
                        </li>

                    </ul>
                </div>

            </div>
        </nav>
        
      </div>
    )
  }
}
export default Navbar;
