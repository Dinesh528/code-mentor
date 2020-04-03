import React, { Component } from 'react'

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
            <div className="container">
              <li className="navbar-brand" to="/">
                CodeMentor
              </li>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#mobile-nav"
              >
                <span className="navbar-toggler-icon" />
                

              </button>
    
              <div className="collapse navbar-collapse" id="mobile-nav">
                <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                      Developers
                  </li>
                </ul>
              </div>
              <div className="collapse navbar-collapse" id="mobile-nav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item ">Sign Up</li>
                <li className="nav-item ">Login</li>
                </ul>
              </div>
            </div>
            
          </nav>  
        );
    }
}
