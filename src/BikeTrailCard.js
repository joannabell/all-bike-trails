import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function BikeTrailCard({ trail, handleCardClick }) {

  return (
    <div onClick={() => handleCardClick(trail)} className="BikeTrailCard">
      {/* <h1>{trail.name}</h1>
      <p>State: {trail.state}</p>
      <img src={trail.image} style={{width:"200px"}}/>
      <p>{trail.difficulty}</p><p>{trail.lengthMiles} Miles</p>
      <p>{trail.description}</p> */}
      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={trail.image} />
      <Card.Body>
        <Card.Title>{trail.name}</Card.Title>
        <Card.Text>
         {trail.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{trail.difficulty}</ListGroup.Item>
        <ListGroup.Item>{trail.lengthMiles}</ListGroup.Item>
        <ListGroup.Item>State: {trail.state}</ListGroup.Item>
      </ListGroup>
    </Card>
    </div>
  );
}

export default BikeTrailCard;