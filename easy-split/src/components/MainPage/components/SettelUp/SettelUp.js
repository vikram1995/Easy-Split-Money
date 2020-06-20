import React, { Component } from 'react';
import {Modal, Form, Button,Col} from 'react-bootstrap';

class SettelUp extends Component{

    
    state={
        friends:[],
        selectedFriend:"_____",
        amount:0,
        balanceSheet:{}
    }

    onChangeHandler(event){
        this.setState({
            [event.target.id]: event.target.value
        })
    }

    onSubmitHandler(){
        console.log("onsubmit called")
        fetch('http://localhost:4000/settelUp',{
            method:'POST',
            headers:{ 
                "Content-type": "application/json; charset=UTF-8"
            },
            body:JSON.stringify({
                friend:this.state.selectedFriend,
                amount: this.state.amount
            })
        }).then(data=>{
            this.props.changeState();
            this.setState({
                friends:[],
                selectedFriend:"_____",
                amount:0,
                balanceSheet:{}
            })
        })
        this.props.handleClose();
    }

    componentDidMount(){
        fetch('http://localhost:4000/friends').then(resp=> resp.json())
        .then(data=>{
            
            this.setState({friends:data})
            
        });

        fetch('http://localhost:4000/transition-details').then(resp=> resp.json()).then(
            data=>{
                console.log(data.total);
            
                this.setState({
                    balanceSheet:data.total

                 })
            }
        )
    }

    render(){
        
        
        return(
            <div>
            

            <Modal show={this.props.show} onHide={this.handleClose} animation={true}>
                <Modal.Header >
                    <Modal.Title>Settle up</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="exampleForm.SelectCustom">
                        <Form.Row>
                            <Form.Label column="sm" sm={4}>
                                With <strong>you</strong> and :
                            </Form.Label>
                            <Col sm={8}>
                            <Form.Control as="select" custom  id="selectedFriend" onChange={this.onChangeHandler.bind(this)} value={this.state.selectedFriend} selected>
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
                    <sapn>Your balance with {this.state.selectedFriend} is {this.state.balanceSheet[this.state.selectedFriend]}</sapn><br/>
                        <Form.Row>
                            
                            <Form.Label column="sm" sm={4}>
                                Amount: 
                            </Form.Label>
                            <Col sm={6}>
                                <Form.Control id="amount" size="sm" type="text" placeholder="0.00" onChange={this.onChangeHandler.bind(this)} value = {this.state.amount} />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary"  onClick={this.onSubmitHandler.bind(this)}>
                        Settel up
                    </Button>
                </Modal.Footer>
          </Modal>
            </div>
            
        )
    }

}

export default SettelUp;