import React,{Component} from 'react';

import AddExpense from '../AddExpense/AddExpense';
import SettelUp from '../SettelUp/SettelUp';



class dashboard extends Component {

    state = {
        addExp : false,
        settelUp: false,
        addFriend:false,
        owed:"",
        owe:"",
        total:0,
        owedAmount:0,
        owesAmount:0,
        stateChange:true,    
    }
     
    owedMember = Object.keys(this.state.owed);
    oweMember = Object.keys(this.state.owe); 
    
    calculate= () =>{
         let owedAmount=0;
         let owesAmount=0;
         let total = 0;
        for(const element in this.state.owed){
            owedAmount = owedAmount + this.state.owed[element];
        }

        for(const element in this.state.owe){
            owesAmount = owesAmount + this.state.owe[element];
        }

        total = owedAmount - owesAmount;
        this.setState({
            owedAmount: owedAmount,
            owesAmount: owesAmount,
            total:total
        })
         
    }

    updateThestate(){
        let stateChange = !this.state.stateChange
        this.setState({stateChange: stateChange})
        
    }
    

     handleAddExpClose = () => this.setState({addExp:false});
     handleAddExpShow = () => this.setState({addExp:true});
     handleSettelUpShow = () => this.setState({settelUp:true}); 
     handleSettelUpClose = () => this.setState({settelUp:false});  
     handleAddfriendShow = () => this.setState({addFriend: true});
     handleAddfriendClose = () => this.setState({addFriend: false});

     componentDidUpdate(preProps,prevState){
         if(prevState.stateChange !== this.state.stateChange){
            fetch('http://localhost:4000/transition-details').then(data=>data.json()).then(data=>{
            
            this.setState({owe:data.owe,
            owed:data.owed})
            
            this.owedMember = Object.keys(this.state.owed);
            this.oweMember = Object.keys(this.state.owe);
            this.calculate();
            
            
        })

         }
     }
     
    componentDidMount(){
        fetch('http://localhost:4000/transition-details').then(data=>data.json()).then(data=>{
            
            this.setState({owe:data.owe,
            owed:data.owed})
            
            this.owedMember = Object.keys(this.state.owed);
            this.oweMember = Object.keys(this.state.owe);
            this.calculate();
            
        })
    }

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
                            INR {this.state.total}
                            
                        </div>
                            
                        <div className="col-4 you-owe">
                            you owe <br/>
                            INR {this.state.owesAmount}
                        </div>

                        <div className="col-4">
                            you are owed <br/>
                            INR {this.state.owedAmount}
                        </div>
                    </div>
                    <hr></hr>
                </div>

                <div className="list-name">
                    <div className="row">
                        <div className="col-6 you-owe-list">
                            <h5>YOU OWE</h5>
                            <ul>
                                {this.oweMember.map(element=>{
                                    return (<li>You owe INR {this.state.owe[element]} to {element}</li>)
                                })}
                            </ul>

                        </div>
                        <div className="col-6 you-are-owed">
                            <h5>YOU ARE OWED</h5>
                            <ul>
                                {this.owedMember.map(element=>{
                                    return (<li>{element} owes you INR {this.state.owed[element]}</li>)
                                })}
                            </ul>
                        </div>
                    </div>
                </div>

                
            <AddExpense  handleShow={this.handleAddExpShow.bind(this)} handleClose={this.handleAddExpClose.bind(this)} show={this.state.addExp} changeState={this.updateThestate.bind(this)}/>
            <SettelUp handleShow={this.handleSettelUpShow.bind(this)} handleClose={this.handleSettelUpClose.bind(this)} show={this.state.settelUp} changeState={this.updateThestate.bind(this)}/>
            
            </div>
        )
    }
}

export default dashboard;