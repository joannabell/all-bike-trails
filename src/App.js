import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import Search from './Search';
import BikeTrail from './BikeTrail';
import NewTrail from './NewTrail';
import { Route, Switch } from 'react-router-dom';
import Home from "./Home";
import { useHistory } from 'react-router-dom';
import SignUp from './Signup';




function App() {
  const [ trails, setTrails ] = useState([])
  const [ users, setUsers ] = useState([])
  const [ currentUser, setCurrentUser ] = useState()
  const [ searchValue, setSearchValue ] = useState("")//updates on search change
  const [ searchQuery, setSearchQuery ] = useState("")//to render on search page between <p> element
  const [ currentTrail, setCurrentTrail ] = useState([])
  const history = useHistory();


  useEffect(() => {
    fetch("http://localhost:3000/bikeTrails")
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

  const searchedTrails = trails.filter((trail) => {
    if(searchQuery.length > 0){
      return trail.name.toLowerCase().includes(searchQuery.toLowerCase())
    }
  })

  return (
    <div className="App">
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
        <Route exact path="/sign-up">
          <SignUp />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
