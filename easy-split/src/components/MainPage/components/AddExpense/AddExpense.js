import React, { Component } from 'react';
import {Modal, Form, Button,Col} from 'react-bootstrap';

class AddExpense extends Component{
    
    
    state = {
        friends:[],
        selectFriend:"",
        description:"",
        amount:0,
        paidBy:"you",
        month:0,
        date:0
        
    }

    onChangeHandler(event){
        this.setState({
            [event.target.id] : event.target.value
        })
        let d = new Date();
        let month = d.getMonth();
        let date = d.getDate();
        console.log(month,date)
        this.setState({
            month:month,
            date:date
        });
    }
    

    onSubmithandler(){
           

        fetch('http://localhost:4000/add-transitions',{
            method: 'POST',
            headers: { 
                    "Content-type": "application/json; charset=UTF-8"
                } ,
            body: JSON.stringify({
                description: this.state.description,
                friend: this.state.selectFriend,
                amount:this.state.amount,
                paidBy:this.state.paidBy,
                date:this.state.date,
                month:this.state.month
            })
        }).then(data=> {
            this.props.changeState();
            this.setState({
                selectFriend:"",
                description:"",
                amount:0,
                paidBy:"you",
                month:0,
                date:0
                
            })
            
        })
        
        this.props.handleClose()
        
    }


    
componentDidMount(){
    fetch('http://localhost:4000/friends').then(resp=> resp.json())
    .then(data=>{
        
        this.setState({friends:data})
        });
}
   

    render(){
       


        
        return(
            <div>
            

            <Modal show={this.props.show} onHide={this.handleClose} animation={true}>
                <Modal.Header >
                    <Modal.Title>Add an expense</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form >
                    <Form.Group controlId="exampleForm.SelectCustom">
                        
                    
                    
                        <Form.Row>
                            <Form.Label column="sm" sm={4}>
                                With <strong>you</strong> and :
                            </Form.Label>
                            <Col sm={6}>
                            
                            
                            <Form.Control id="selectFriend" as="select" custom  onChange={this.onChangeHandler.bind(this)} value={this.state.selectFriend} placeholder="choose" > 
                            {this.state.friends.map((element)=>{
                            return(<option>
                            {element}
                                </option>)
                                 })}
                            </Form.Control>
                            
                            </Col>
                           
                        </Form.Row>
                    </Form.Group>

                    <Form.Group>
                        <Form.Row>
                            <Form.Label column="sm" sm={4}>
                                Description: 
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control id="description" size="sm" type="text" placeholder="enter a description" value={this.state.description} onChange={this.onChangeHandler.bind(this)} />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group>
                        <Form.Row>
                           <span>Paid by : </span>  
                           <select id="paidBy" onChange={this.onChangeHandler.bind(this)} value={this.state.paidBy}>
                                 <option>you</option>
                                <option>{this.state.selectFriend}</option>
                           </select>
                        </Form.Row>
                    </Form.Group>
                    <Form.Group>
                        <Form.Row>
                            <Form.Label column="sm" sm={4}>
                                Amount: 
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control id="amount" size="sm" type="text" placeholder="0.00" onChange={this.onChangeHandler.bind(this)} vlaue = {this.state.amount}/>
                            </Col>
                        </Form.Row>
                        
                    </Form.Group>
                    </Form>
                                 
                    
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary"  onClick={this.props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" type="submit" onClick={this.onSubmithandler.bind(this)}>
                        Add Expense
                    </Button>
                    
                </Modal.Footer>
                
          </Modal>
          
            </div>
            
        )
    }

}

export default AddExpense;