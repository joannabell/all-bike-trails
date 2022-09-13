import Button from "react-bootstrap/Button"
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

function Login({handleCloseLogin, showLogin}){
    return (
        <Modal show={showLogin} onHide={handleCloseLogin}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form >
                <Form.Group className="mb-3">
                    <Form.Control type="email" placeholder="Enter email" name="email" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Control type="password" placeholder="Password" name="password" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Button variant="primary" type="submit" onClick={handleCloseLogin}>
                        Login
                    </Button>
                </Form.Group>
            </Form>
        </Modal.Body>
      </Modal>
    )
}

export default Login;