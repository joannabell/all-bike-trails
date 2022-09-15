import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
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
  
  //<img style={{ width: "15%", height: "15%" }} src="/all-bike-trails-logo.png" alt="logo" />

  return (
    <>
    <div className="navbar navbar-dark bg-dark">
      <Navbar >
          <Nav >
            <img style={{ width: "15%", height: "15%" }} src="/all-bike-trails-logo.png" alt="logo" />
            <Button className="px-4 mx-2 btn-secondary btn-sm rounded-pill" href="/" >Home</Button>
            <Button className="px-4 btn-secondary btn-sm rounded-pill" href="/new-trail">Add New Trail</Button>
           </Nav>

          <Button className="px-4 mx-2 btn-secondary btn-sm rounded-pill" onClick={handleShowSignup}>Sign Up</     Button>
          <Button className="px-4 btn-secondary btn-sm rounded-pill" onClick={handleShowLogin}>Login</Button>
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