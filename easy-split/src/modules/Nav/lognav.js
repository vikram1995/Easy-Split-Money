import React from 'react';
import './lognavStyle.css';

const nav = (props) =>{

    const loginStatus = props.registered ? "Sign Up": "Sign In";
    const logView = props.registered ? props.signInToUp : props.signUptoIn;

return(
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="#" onClick={props.status}>Easy Split</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={props.status}>Home <span className="sr-only">(current)</span></a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" href="#" onClick={logView}>{loginStatus}</a>
                    </li>
                </ul>
            </div>
        </nav> 
    </div>
)
}

export default nav;