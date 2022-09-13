import React, { useState, useEffect } from 'react';
import Search from './Search';
import NewTrail from './NewTrail';
import { Route, Switch } from 'react-router-dom';
import Home from "./Home";


function App() {
  const [trails, setTrails] = useState([])
  const [ searchValue, setSearchValue ] = useState("")
  const [ searchQuery, setSearchQuery ] = useState("")


  useEffect(() => {
    fetch("http://localhost:3000/bikeTrails")
    .then(res => res.json())
    .then(bikeTrails => setTrails(bikeTrails))
  }, [])

  function handleSearchChange(event) {
    setSearchValue(event.target.value)
  }

  function updateSearchQuery(newSearch){
    setSearchQuery(newSearch)
    setSearchValue("")
}

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home 
          handleSearchChange={handleSearchChange} 
          searchValue={searchValue} 
          updateSearchQuery={updateSearchQuery}
          />
        </Route >
        <Route exact path="/search">
          <Search 
          searchValue={searchValue} 
          handleSearchChange={handleSearchChange} 
          updateSearchQuery={updateSearchQuery} 
          searchQuery={searchQuery}
          />
        </Route >
        <Route exact path="/new-trail">
          <NewTrail />
        </Route >
      </Switch>
    </div>
  );
}

export default App;
