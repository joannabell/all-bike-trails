import { useState } from "react";
import Button from "react-bootstrap/Button"
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'


function Signup({handleCloseSignup, showSignup}) {
    const [ signUpData, setSignUpData ] = useState({ 
        firstName: "", 
        lastName: "", 
        email: "", 
        password: "" ,
        favorites: []
    });
    
    function handleFormChange(event){
        setSignUpData({...signUpData, [event.target.name]: event.target.value})
    }

    function handleSubmitForm(event){
        event.preventDefault()
        console.log(signUpData)
        fetch("https://radiant-sands-06167.herokuapp.com/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json" 
            },
            body: JSON.stringify(signUpData)
        })
        .then(res => res.json())
        .then(user => console.log(user))

        setSignUpData({ 
            firstName: "", 
            lastName: "", 
            email: "", 
            password: ""
        })
    }

    return (
        <Modal show={showSignup} onHide={handleCloseSignup}>
        <Modal.Header closeButton>
          <Modal.Title>Register to recieve updates!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <Form onSubmit={handleSubmitForm} >
                <Form.Group className="mb-3">
                    <Form.Control type="text" placeholder="Last name" name="lastName" value={signUpData.lastName} onChange={handleFormChange}required/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="text" placeholder="First name" name="firstName" value={signUpData.firstName} onChange={handleFormChange} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="email" placeholder="Enter email" name="email" onChange={handleFormChange} value={signUpData.email} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="password" placeholder="Password" name="password" value={signUpData.password} onChange={handleFormChange} required/>
                </Form.Group>
                <Form.Group className="mb-3">
                    <Button variant="dark" type="submit" >
                        Sign up
                    </Button>
                </Form.Group>
            </Form>
        </Modal.Body>
      </Modal>
    )
}

export default Signup;