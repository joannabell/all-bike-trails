import React, { useState, useEffect } from 'react';

function App() {
  const [trails, setTrails] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/bikeTrails")
    .then(res => res.json())
    .then(bikeTrails => setTrails(bikeTrails))
  }, [])

  return (
    <div className="App">

    </div>
  );
}

export default App;
