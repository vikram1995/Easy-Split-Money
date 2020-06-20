import React, { Component } from 'react';
import {Modal, Form, Button,Col} from 'react-bootstrap';

class Addfriend extends Component{

    
    state={
        friends:""
    }


    onChangeHandler(event){
        this.setState({friends: event.target.value})
    }

    onSubmitHandler(){
        

        fetch('http://localhost:4000/add-friends',{
            method: 'POST',
            headers: { 
                    "Content-type": "application/json; charset=UTF-8"
                } ,
                body:JSON.stringify(
                    {
                        name:this.state.friends
                    }
                )
                    
                
        }).then(data=>{
            this.props.changeState()
            this.setState({
                friends:""
            })
        })
        this.props.handleClose();

    }

    render(){
        
        
        return(
            <div>
            

            <Modal show={this.props.show} onHide={this.handleClose} animation={true}>
                <Modal.Header >
                    <Modal.Title>Add friend</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        
                    <Form.Group>
                        <Form.Row>
                            <Form.Label column="sm" sm={4}>
                                Friend: 
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control size="sm" type="text" placeholder="Name"  onChange={this.onChangeHandler.bind(this)} value={this.state.friends}/>
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
                        Add friend
                    </Button>
                </Modal.Footer>
          </Modal>
            </div>
            
        )
    }

}

export default Addfriend;