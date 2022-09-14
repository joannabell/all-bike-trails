import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button"
import Modal from 'react-bootstrap/Modal';
import Signup from './Signup';
import Login from './Login';

function NavBar({validateUser}) {
  const [ showLogin, setShowLogin ] = useState(false);
  const [ showSignup, setShowSignup ] = useState(false)
  

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const handleCloseSignup = () => setShowSignup(false);
  const handleShowSignup = () => setShowSignup(true);
  


  return (
    <>
    <div className="NavBar">
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/new-trail">Add Trail</Nav.Link>
            <Nav.Link href="/favorites">Favorites</Nav.Link>
          </Nav>
          <Nav>
          <img src="/home/bkurose/Development/code/phase-2/all-bike-trails/assets/all-bike-trails-logo.png" /> 
          </Nav>
          <Nav>
            <Button className="px-3 mx-2 btn-secondary btn-sm rounded-pill"onClick={handleShowSignup}>Sign up</Button>
            <Button className="px-3 btn-secondary btn-sm rounded-pill"onClick={handleShowLogin}>Login</Button>
          </Nav>
        </Container>
      </Navbar>
    </div>
    <div className='login-modal'>
      {showLogin ? <Login showLogin={showLogin} handleCloseLogin={handleCloseLogin} validateUser={validateUser}/> : ""}
    </div>

    <div className='signup-modal'>
      {showSignup ? <Signup showSignup={showSignup} handleCloseSignup={handleCloseSignup}/> : ""}
    </div>
    </>
  );
}

export default NavBar;