import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import Search from './Search';
import BikeTrail from './BikeTrail';
import NewTrail from './NewTrail';
import Home from "./Home";
import NavBar from './NavBar';
import Favorites from "./Favorites";

function App() {
  const [ trails, setTrails ] = useState([])
  const [ users, setUsers ] = useState([])
  const [ currentUser, setCurrentUser ] = useState({})
  const [ searchValue, setSearchValue ] = useState("")//updates on search change
  const [ searchQuery, setSearchQuery ] = useState("")//to render on search page between <p> element
  const [ currentTrail, setCurrentTrail ] = useState([])
  const history = useHistory();


  useEffect(() => {
    fetch("http://localhost:3001/bikeTrails")
    .then(res => res.json())
    .then(bikeTrails => {
      setTrails(bikeTrails)
      setCurrentTrail(bikeTrails[0])
    })

    fetch("http://localhost:3000/users")
    .then(res => res.json())
    .then(users => {
      setUsers(users)
    })
  }, [])

  function handleSearchChange(event) {
    setSearchValue(event.target.value)
  }

  function updateSearchQuery(newSearch){
    setSearchQuery(newSearch)
}

  function handleCardClick(trail) {
    setCurrentTrail(trail)
    history.push("/bike-trail")
  }

   
  function validateUser(loginInfo){
    const validatedUser = users.filter((user) => {
      if(user.email === loginInfo.email && user.password === loginInfo.password){
        return user
      }
    })

    if(validatedUser.length === 0){
      alert("wrong username or password!")
    }
    setCurrentUser(validatedUser)
  }

  const searchedTrails = trails.filter((trail) => {
    if(searchQuery.length > 0){
      return trail.name.toLowerCase().includes(searchQuery.toLowerCase())
    }
  })

  return (
    <div className="App">
      <NavBar validateUser={validateUser} currentUser={currentUser}/>
      <Switch>
        <Route exact path="/">
          <Home 
          handleCardClick={handleCardClick}
          trails={trails}
          handleSearchChange={handleSearchChange} 
          searchValue={searchValue} 
          updateSearchQuery={updateSearchQuery}
          />
        </Route >
        <Route exact path="/search">
          <Search 
          handleCardClick={handleCardClick}
          searchValue={searchValue} 
          handleSearchChange={handleSearchChange} 
          updateSearchQuery={updateSearchQuery} 
          searchQuery={searchQuery}
          trails={searchedTrails}
          />
        </Route >
        <Route exact path="/new-trail">
          <NewTrail />
        </Route >
        <Route exact path="/bike-trail">
          <BikeTrail trail={currentTrail} />
        </Route >
        <Route exact path="/favorites">
          <Favorites currentUser={currentUser} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
