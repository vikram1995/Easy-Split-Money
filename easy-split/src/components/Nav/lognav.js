import React from 'react';
import './lognavStyle.css';

const nav = (props) =>{
    let page 
    let linkText
    if(window.location.pathname === '/login')
    {
         page = "/signUp";
         linkText = "Sign Up"
    }

    else if(window.location.pathname === '/signUp')
    {
        page = "/login";
         linkText = "Sign In"
    }
    
    

return(
    <div>
       <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <a className="navbar-brand" href="/">Easy Split</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="/" >Home <span className="sr-only">(current)</span></a>
                    </li>
                    
                    <li className="nav-item">
                        <a className="nav-link" href= {page} >{linkText}</a>
                    </li>
                </ul>
            </div>
        </nav> 
    </div>
)
}

export default nav;