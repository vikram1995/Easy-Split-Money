import React, { Component } from 'react';
import {Modal, Form, Button,Row,Col} from 'react-bootstrap';

class SettelUp extends Component{

    
    state={
        friends:[]
    }

    render(){
        fetch('http://localhost:4000/friends').then(resp=> resp.json())
        .then(data=>{
            
            this.setState({friends:data})
            
        });
        
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
                            <Form.Control as="select" custom>
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
                                Amount: 
                            </Form.Label>
                            <Col sm={8}>
                                <Form.Control size="sm" type="text" placeholder="0.00" />
                            </Col>
                        </Form.Row>
                    </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={this.props.handleClose}>
                        Settel up
                    </Button>
                </Modal.Footer>
          </Modal>
            </div>
            
        )
    }

}

export default SettelUp;