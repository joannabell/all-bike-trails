import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function BikeTrailCard({ trail, handleCardClick }) {

  return (
    <div onClick={() => handleCardClick(trail.id)} className="BikeTrailCard">
      {/* <h1>{trail.name}</h1>
      <p>State: {trail.state}</p>
      <img src={trail.image} style={{width:"200px"}}/>
      <p>{trail.difficulty}</p><p>{trail.lengthMiles} Miles</p>
      <p>{trail.description}</p> */}
      {/* <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={trail.image} className="hovereffect"/>
      <Card.Body>
        <Card.Title className=" mb-1 card-title text-truncate">{trail.name}</Card.Title>
        <Card.Text className='mb-1 text-muted'>{trail.state}</Card.Text>
        <Card.Text className="mb-1 text-truncate">
         {trail.description}
        </Card.Text>
        <Card.Text className='text-success  align-text-bottom'>{trail.difficulty} <span className='text-dark'>• {trail.lengthMiles} miles</span></Card.Text>
        <Card.Text className='mb-0'>{trail.comments.length} comments</Card.Text>
      </Card.Body> */}
    
    <div className="search-cards">
      <div><img src={trail.image} onClick={() => handleCardClick(trail.id)}/></div>
       <div className="content">
        <h3>{trail.name}</h3>  
         <p id='trail-state' style={{textDecoration: "underline"}}>{trail.state}</p>
        <p id="trail-difficulty"> Difficulty: <span>{trail.difficulty}</span> • Length: {trail.lengthMiles} miles</p>
        <p>{trail.description}</p>
        <p>{trail.comments.length} comments</p>
        </div>
    </div>
    </div>
  );
}

export default BikeTrailCard;