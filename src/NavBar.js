import React from 'react'
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  
  function handleSignUp(){
    const popup = window.open("/sign-up", "popup", "popup=true", "width=400px");
  }
 
  return (
    <div className="NavBar">
      {/* <NavLink exact to="/">
        Home
      </NavLink>
      <NavLink exact to="/new-trail">
        Add Trail
      </NavLink> */}
  
      <Navbar bg="light" variant="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/new-trail">Add Trail</Nav.Link>
          </Nav>
          <button onClick={handleSignUp}>Sign up</button>
          <button>Login</button>
        </Container>
      </Navbar>
      </div>
    
  );
}

export default NavBar;