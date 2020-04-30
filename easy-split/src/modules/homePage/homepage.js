import React from 'react';
import './homePageStyle.css';

const homePage = (props) => {
    return (
        <div className="welcome-page">
                    <div className="row">
                        <div className="col-6">
                            <button type="button" className="btn btn-lg btn-success" value="signIn" onClick= {props.click}>Sign In</button>
                        </div>
                                
                        <div className="col-6">
                            <button type="button" className="btn btn-lg btn-secondary" value="signUp" onClick= {props.click}>Sign Up</button>
                        </div>
                    </div>

                    </div>
    )
}

export default homePage;