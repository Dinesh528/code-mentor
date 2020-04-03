import React, { Component } from 'react'

 class Landing extends Component {
    render() {
        return (
            <div className="landing">
                <div className="dark-overlay landing-inner text-light">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1 className="display-3 mb-4">Code Mentor</h1>
                                <p className="lead">Create a developer profile/Portfolio, 
                                Share posts and get help from other developers</p>
                                <hr/>
                                <a href="" className="btn btn-lg btn-info mr-2 button">Sign Up</a>
                                <a href="" className="btn btn-lg btn-light button">Login</a>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
    );
    }
}
export default Landing;