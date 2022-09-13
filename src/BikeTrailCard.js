import React from 'react';

function BikeTrailCard({ trail }) {

  const { 
    id,
    name, 
    state, 
    lengthMiles, 
    difficulty, 
    isHilly, 
    description, 
    features, 
    mapPDF, 
    image, 
    comments 
  } = trail;

  return (
    <div className="BikeTrailCard">
      <h1>{name}</h1>
      <p>State: {state}</p>
      <img src={image} style={{width:"200px"}}/>
      <p>{difficulty}</p><p>{lengthMiles} Miles</p>
      <p>{description}</p>
    </div>
  );
}

export default BikeTrailCard;