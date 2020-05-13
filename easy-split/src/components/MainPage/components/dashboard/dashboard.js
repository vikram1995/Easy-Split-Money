import React,{Component} from 'react';

import AddExpense from '../AddExpense/AddExpense';
import SettelUp from '../SettelUp/SettelUp';


class dashboard extends Component {

    state = {
        addExp : false,
        settelUp: false
        
    }
     

     handleAddExpClose = () => this.setState({addExp:false});
     handleAddExpShow = () => this.setState({addExp:true});
     handleSettelUpShow = () => this.setState({settelUp:true}); 
     handleSettelUpClose = () => this.setState({settelUp:false});        

    render(){

        return(
            <div className="dashboard">
                <div className="dashboard-summary">
                    <div className="row">
                        <div className="col-6">
                            <h4>Dashboard</h4>
                        </div>

                        <div className="col-6">
                            <button className="btn btn-danger btn-sm add-expence" onClick={this.handleAddExpShow}>Add an expence</button>
                            
                            <button className="btn btn-success btn-sm settle-up" onClick={this.handleSettelUpShow}>Settle up</button>
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

                
            <AddExpense  handleShow={this.handleAddExpShow.bind(this)} handleClose={this.handleAddExpClose.bind(this)} show={this.state.addExp}/>
            <SettelUp handleShow={this.handleSettelUpShow.bind(this)} handleClose={this.handleSettelUpClose.bind(this)} show={this.state.settelUp}/>
            </div>
        )
    }
}

export default dashboard;