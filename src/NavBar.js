import React, { useState } from 'react'
import Signup from './Signup';
import Login from './Login';
import Button from 'react-bootstrap/Button'
import { Link, NavLink } from "react-router-dom";

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
  
    <header className="navbar">
      <div className="container">
  
        <div class="left">
          <ul>
            <li class="active">
              <NavLink exact to="/" style={{fontWeight: 'bold'}}>HOME</NavLink>
            </li>
  
            <li>
            <NavLink exact to="/new-trail" style={{fontWeight: 'bold'}}>ADD TRAIL</NavLink>
            </li>
          </ul>
        </div>
  
        <div class="center">
            <img class="logo" src="https://iili.io/PmKQmg.png" alt="logo" style={{height: "50px", width:" 220px"}}/>
        </div>

        <div class="right">
          <Button className="px-3 mx-2 btn-light btn-small rounded-pill" onClick={handleShowSignup} style={{fontSize: "14px"}}>Register</Button>
          <Button className="px-3 btn-secondary btn-small rounded-pill" onClick={handleShowLogin} style={{fontSize: "14px"}}>Log In</Button>
        </div>
      </div>
    
    </header>
    {/* <hr style={{borderBottom: "1px solid black"}}></hr> */}
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