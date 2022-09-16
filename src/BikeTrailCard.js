import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function BikeTrailCard({ trail, handleCardClick }) {

  return (
    <div className="BikeTrailCard"> 
    <div className="search-cards">
      <div><img src={trail.image} style={{cursor:"pointer"}} onClick={() => handleCardClick(trail.id)}/></div>
       <div className="content">
        <h3 onClick={() => handleCardClick(trail.id)} style={{cursor:"pointer"}}>{trail.name}</h3>  
         <p id='trail-state' style={{textDecoration: "underline"}}>{trail.state}</p>
        <p id="trail-difficulty"> Difficulty: <span>{trail.difficulty}</span> • Length: {trail.lengthMiles} miles • {trail.isHilly ? "Terrain: Hilly" : "Terrain: Flat"}</p>
        <p>{trail.description.slice(0,200)}...</p>
        <p>{trail.comments.length} comments</p>
        </div>
    </div>
    </div>
  );
}

export default BikeTrailCard;