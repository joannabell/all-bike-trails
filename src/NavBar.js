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

    </div>

    <header className="navbar hidden-sm-down">
      <div className="container">
  
        <div class="left">
          <ul>
            <li class="active">
              <NavLink exact to="/">Home</NavLink>
            </li>
  
            <li>
            <NavLink exact to="/NewTrailForm">Add New Trail</NavLink>
            </li>
          </ul>
        </div>

        <div class="center">
          <h4 href="#">
            <img src="https://i.pinimg.com/600x315/1a/7b/32/1a7b32ea3c2271e5448ea08b0d250d09.jpg" alt="logo" className="logo" />
          </h4>
        </div>
  
        <div class="right">
          <a class="btn btn-secondary" href="#" role="button">Sign Up</a>
          <a class="btn btn-secondary" href="#" role="button">Login</a>
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