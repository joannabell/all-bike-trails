import React, { useState } from 'react'
import Signup from './Signup';
import Login from './Login';
import { NavLink } from "react-router-dom";

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
      <div class="center">
        </div>
    </div>

    <header className="navbar hidden-sm-down">
      <div className="container">
  
        <div class="left">
          <ul>
            <li class="active">
              <NavLink exact to="/" style={{fontWeight: 'bold'}}>HOME</NavLink>
            </li>
  
            <li>
            <NavLink exact to="/new-trail" style={{fontWeight: 'bold'}}>ADD NEW TRAIL</NavLink>
            </li>
          </ul>
        </div>
  
        <div class="center">
            <img class="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEA3r4Io9tRcDoLZF1AD-i7EB3z9D-1_fs3g&usqp=CAU" alt="logo" />
          <span class="logotext" style={{fontWeight: 'bold'}}>
          All Bike Trails
          </span>
        </div>

        <div class="right">
          <a class="btn btn-secondary" href="#" role="button">sign up</a>
          <a class="btn btn-secondary" href="#" role="button">login</a>
        </div>
  
      </div>
    </header>

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