import React from 'react';

function BikeTrailCard({ name, length, description, image }) {
  return (
    <div className="BikeTrailCard">
      <h1>{name}</h1>
      <p>{length} Miles</p>
      <p>{description}</p>
      <img src={image} />
    </div>
  );
}

export default BikeTrailCard;