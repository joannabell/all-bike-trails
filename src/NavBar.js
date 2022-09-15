import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from "react-bootstrap/Button"
import Modal from 'react-bootstrap/Modal';
import Signup from './Signup';
import Login from './Login';
import Image from 'react-bootstrap/Image';

function NavBar({validateUser, currentUser}) {
  const [ showLogin, setShowLogin ] = useState(false);
  const [ showSignup, setShowSignup ] = useState(false)
  

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);

  const handleCloseSignup = () => setShowSignup(false);
  const handleShowSignup = () => setShowSignup(true);
  

  return (
    <>
    <div className="navbar navbar-dark bg-dark">
      <Navbar >
        <Container>
          <Nav className=''>
            <img style={{ width: "20%", height: "20%" }} src="/all-bike-trails-logo.png" alt="logo" />
            <Nav.Link href="/" >HOME</Nav.Link>
            <Nav.Link href="/new-trail">ADD NEW TRAIL</Nav.Link>
          </Nav>
            
          <Nav>
            <Button className="px-4 mx-2 btn-secondary btn-sm rounded-pill"onClick={handleShowSignup}>Sign Up</Button>
            <Button className="px-4 btn-secondary btn-sm rounded-pill"onClick={handleShowLogin}>Login</Button>
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