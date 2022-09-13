import React, { useState, useEffect } from 'react';
import Search from './Search';
import NewTrail from './NewTrail';
import { Route, Switch } from 'react-router-dom';
import Home from "./Home";



function App() {
  const [trails, setTrails] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/bikeTrails")
    .then(res => res.json())
    .then(bikeTrails => setTrails(bikeTrails))
  }, [])

  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Home />
        </Route >
        <Route exact path="/Search">
          <Search />
        </Route >
        <Route exact path="/NewTrail">
          <NewTrail />
        </Route >
      </Switch>
    </div>
  );
}

export default App;
