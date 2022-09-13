import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button"
import Modal from 'react-bootstrap/Modal';
import Signup from './Signup';
import Login from './Login';

function NavBar() {
  const [ showLogin, setShowLogin ] = useState(false);
  const [ showSignup, setShowSignup ] = useState(false)

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const handleCloseSignup = () => setShowSignup(false);
  const handleShowSignup = () => setShowSignup(true);
  
  function handleSignUp(){
    const popup = window.open("/sign-up", "popup", "popup=true", "width=400px");
  }
 
  return (
    <>
    <div className="NavBar">
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/new-trail">Add Trail</Nav.Link>
          </Nav>
          <Button onClick={handleShowSignup}>Sign up</Button>
          <Button onClick={handleShowLogin}>Login</Button>
        </Container>
      </Navbar>
    </div>
    <div className='login-modal'>
      {showLogin ? <Login showLogin={showLogin} handleCloseLogin={handleCloseLogin}/> : ""}
    </div>

    <div className='signup-modal'>
      {showSignup ? <Signup showSignup={showSignup} handleCloseSignup={handleCloseSignup}/> : ""}
    </div>
    </>
  );
}

export default NavBar;