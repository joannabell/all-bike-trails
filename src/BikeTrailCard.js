import React from 'react';

function BikeTrailCard({ trail, handleCardClick }) {

  return (
    <div onClick={() => handleCardClick(trail)} className="BikeTrailCard">
      <h1>{trail.name}</h1>
      <p>State: {trail.state}</p>
      <img src={trail.image} style={{width:"200px"}}/>
      <p>{trail.difficulty}</p><p>{trail.lengthMiles} Miles</p>
      <p>{trail.description}</p>
    </div>
  );
}

export default BikeTrailCard;