import React ,{Component} from 'react';
import AddExpense from '../AddExpense/AddExpense';
import SettelUp from '../SettelUp/SettelUp';


class Expences extends Component {

    state = {
        addExp : false,
        settelUp: false
        
    }
     

     handleAddExpClose = () => this.setState({addExp:false});
     handleAddExpShow = () => this.setState({addExp:true});
     handleSettelUpShow = () => this.setState({settelUp:true}); 
     handleSettelUpClose = () => this.setState({settelUp:false});  



     exp = [
        {   
            id:1,
            day:"05",
            month:"MAY",
            description:"Breakfast",
            paid:"20.00",
            lendTo:"Rahul",
            lendAmound:"10.00"
        },

        {
            id: 2,
            day:"07",
            month:"DEC",
            description:"lunch",
            paid:"60.00",
            lendTo:"Swapnil",
            lendAmound:"30.00"
        },
        {
            id : 3,
            day:"05",
            month:"MAY",
            description:"Dinner",
            paid:"20.00",
            lendTo:"Rahul",
            lendAmound:"10.00"
        }

    ]

  listItems = this.exp.map( (element) => {
  return (<div className="recent-activity">

            <div className="row">
                <div className="col-2 expense-date">
                    <span className="day">{element.day}</span><br/>
                    <span className="expence-month">{element.month}</span>
                </div>
                <div className="col-4">
                    <p>{element.description}</p>
                </div>
                <div className="col-3">
                    <span className="you-paid">you paid</span><br/>
                    <span className="paid-amount">INR{element.paid}</span>
                </div>
                <div className="col-3">
                    <sapn className="you-lend">you lend {element.lendTo}</sapn><br/>
                    <span className="lend-amount">INR{element.lendAmound}</span>
                </div>

            </div>

            </div>)
  })

  render(){

    return(
                <div>
                    <div className="heading">
                        
                        <div className="row">
                            <div className="col-6">
                                <h4>All expenses</h4>
                            </div>

                            <div className="col-6">
                                <button className="btn btn-danger btn-sm add-expence" onClick={this.handleAddExpShow}>Add an expence</button>

                                <button className="btn btn-success btn-sm settle-up" onClick={this.handleSettelUpShow}>Settle up</button>
                            </div>

                        </div>
                    </div>
                    <div>
                        {this.listItems}
                    </div>
                    <AddExpense  handleShow={this.handleAddExpShow.bind(this)} handleClose={this.handleAddExpClose.bind(this)} show={this.state.addExp}/>
                    <SettelUp handleShow={this.handleSettelUpShow.bind(this)} handleClose={this.handleSettelUpClose.bind(this)} show={this.state.settelUp}/>

                </div>
    )
    }


    
}

export default Expences;