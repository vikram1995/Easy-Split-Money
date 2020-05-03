import React from 'react';
import './homePageStyle.css';

const homePage = (props) => {
    return (
        <div className="welcome-page">
                    <div className="row">
                        <div className="col-6">
                            <a className="btn btn-lg btn-success" href="/login" role="button">Sign In</a>
                            
                        </div>
                                
                        <div className="col-6">
                        <a className="btn btn-lg btn-secondary" href="/signUp" role="button">Sign Up</a>
                            
                        </div>
                    </div>

                    </div>
    )
}

export default homePage;