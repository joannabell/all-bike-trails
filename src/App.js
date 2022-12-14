import React, { useState, useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';

import Search from './Search';
import BikeTrail from './BikeTrail';
import NewTrailForm from './NewTrailForm';
import Home from "./Home";
import NavBar from './NavBar';
import Favorites from "./Favorites";

function App() {
  const [ trails, setTrails ] = useState([])
  const [ users, setUsers ] = useState([])
  const [ currentUser, setCurrentUser ] = useState([])
  const [ searchValue, setSearchValue ] = useState("")//updates on search change
  const [ searchQuery, setSearchQuery ] = useState("")//to render on search page between <p> element
  const [ currentTrail, setCurrentTrail ] = useState([])
  const history = useHistory();


  useEffect(() => {
    fetch("https://radiant-sands-06167.herokuapp.com/bikeTrails")
    .then(res => res.json())
    .then(bikeTrails => {
      setTrails(bikeTrails)
      setCurrentTrail(bikeTrails[0])
    })

    fetch("https://radiant-sands-06167.herokuapp.com/users")
    .then(res => res.json())
    .then(users => {
      setUsers(users)
    })
  }, [])

  function handleDelete(updatedTrails) {
    setTrails(updatedTrails)
  }

  function handleComments(updatedTrails, updatedTrail) {
    setTrails(updatedTrails)
    setCurrentTrail(updatedTrail)
  }
  
  function handleSearchChange(event) {
    setSearchValue(event.target.value)
  }

  function addTrails(newTrail){
    setTrails([...trails, newTrail])
  }

  function updateSearchQuery(newSearch){
    setSearchQuery(newSearch)
}

  function handleCardClick(id) {
    history.push(`trail/${id}`)
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

  console.log(currentUser)

  const searchedTrails = trails.filter((trail) => {
    if(searchQuery.length > 0){
      return trail.name.toLowerCase().includes(searchQuery.toLowerCase()) || trail.state.toLowerCase().includes(searchQuery.toLowerCase())
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
          <NewTrailForm addTrails={addTrails} />
        </Route >
        <Route exact path="/trail/:id">
          <BikeTrail 
          handleComments={handleComments} 
          handleDelete={handleDelete} 
          trails={trails} 
          trail={currentTrail} />
        </Route >
      </Switch>
      <footer className='footer'>

      </footer>
    </div>
  );
}

export default App;
