import React from 'react';



const dashboard = (props) =>{

    return(
        <div className="dashboard">
            <div className="dashboard-summary">
                <div className="row">
                    <div className="col-6">
                        <h4>Dashboard</h4>
                    </div>

                    <div className="col-6">
                        <button className="btn btn-danger btn-sm add-expence" onClick={props.add}>Add an expence</button>
                        
                        <button className="btn btn-success btn-sm settle-up">Settle up</button>
                    </div>

                </div>
                <hr></hr>
                <div className="row balance">
                    <div className="col-4 total-balance">
                        total balance <br/>
                        +$12
                        
                    </div>
                        
                    <div className="col-4 you-owe">
                        you owe <br/>
                        $0.0
                    </div>

                    <div className="col-4">
                        you are owed <br/>
                        $30
                    </div>
                </div>
                <hr></hr>
            </div>

            <div className="list-name">
                <div className="row">
                    <div className="col-6 you-owe-list">
                        <h5>YOU OWE</h5>

                    </div>
                    <div className="col-6 you-are-owed">
                        <h5>YOU ARE OWED</h5>

                    </div>
                </div>
            </div>
       
        </div>
    )
}

export default dashboard;