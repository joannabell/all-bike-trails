import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function FavoriteItem({user}) {
   console.log(user)
  return (
    <div className='favorites'>
        <h3>Your favorites</h3>
        {user.favorites.map((trail) => (
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={trail.image} />
          <Card.Body>
            <Card.Title>{trail.name}</Card.Title>
            <Card.Text>
             {trail.description}
            </Card.Text>
            <Button variant="primary">Details</Button>
          </Card.Body>
        </Card>
        ))}
    </div>
  );
}

export default FavoriteItem;