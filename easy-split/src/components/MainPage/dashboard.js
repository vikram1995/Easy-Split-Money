import React from "react";
import './dashboardstyle.css';

const dashboard = () =>{

    return(
        <div className="dashboard">
            <div className="menu">
                <div className="row ">
                        <div className="col-6">
                            <h1>Dashboard</h1>
                        </div>

                        <div className="col-3">
                            <br/>
                            <a className="btn btn-danger btn-sm" href="#" role="button">Add an expence</a>
                        </div>
                        <div className="col-3">
                            <br/>
                            <a className="btn btn-success btn-sm" href="#" role="button">Settle up</a>
                        </div>
                        
                    </div>
                    <br/>
                    <div className="row amount">
                        <div className="col-4">
                            <p>Total balance</p>
                            <p>$10</p>
                        </div>
                        <div className="col-4">
                            <p>you owe</p>
                            <p>$10</p>
                        </div>
                        <div className="col-4">
                            <p>you are owed</p>
                            <p>$10</p>
                        </div>
                    </div>
            </div>

                <div className="row list">
                    <div className="col-6 owe">
                        <h5>YOU OWE</h5>
                    </div>
                    <div className="col-6 owed">
                        <h5>YOU ARE OWED</h5>
                    </div>
                </div>
        </div>
    )
}

export default dashboard