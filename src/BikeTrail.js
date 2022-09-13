import React from 'react';
import NavBar from "./NavBar";
import SearchBar from "./SearchBar"

function BikeTrail({ trail }) {
  return (
    <div>
      <NavBar />
      <SearchBar />
      <div className="BikeTrail">
        <h1>{trail.name}</h1>
        <p>State: {trail.state}</p>
        <img src={trail.image} style={{width:"600px"}}/>
        <p>{trail.difficulty}</p>
        <p>{trail.lengthMiles} Miles</p>
        <p>{trail.isHilly ? "Is a hilly ride" : "Is not a hilly ride"}</p>
        <p>{trail.description}</p>
        <p>{trail.features}</p>
        <iframe src={trail.mapPDF} />
        <p>{trail.comments}</p>
      </div>
    </div>
  );
}

export default BikeTrail;