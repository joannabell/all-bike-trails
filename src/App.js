import React, { useState, useEffect } from 'react';
import NavBar from './NavBar';
import SearchBar from "./SearchBar"


function App() {
  const [trails, setTrails] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/bikeTrails")
    .then(res => res.json())
    .then(bikeTrails => setTrails(bikeTrails))
  }, [])

  return (
    <div className="App">
      <NavBar />
      <SearchBar />
    </div>
  );
}

export default App;
