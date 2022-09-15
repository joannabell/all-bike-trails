import Button from "react-bootstrap/Button"
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from "react";

function Login({handleCloseLogin, showLogin, validateUser}){
    const [ loginData, setLoginData ] = useState({email: "", password: ""})

    function handleFormChange(event){
        setLoginData({...loginData, [event.target.name]: event.target.value})
    }

    function handleFormSubmit(event) {
        event.preventDefault()
        validateUser(loginData)
    }

    return (
        <div className="login">
               <Modal show={showLogin} onHide={handleCloseLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Log in</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={handleFormSubmit}>
            <Form.Group className="mb-3" >
                <Form.Control type="email" placeholder="Enter email" name="email" value={loginData.email} onChange={handleFormChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control type="password" placeholder="Password" name="password" value={loginData.password} onChange={handleFormChange}/>
            </Form.Group>
            <Form.Group className="mb-3">
                <Button variant="primary" type="submit">
                    Log in
                </Button>
            </Form.Group>
        </Form>
        </Modal.Body>
      </Modal>
        </div>
     
    )
}

export default Login;