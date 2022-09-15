import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function FavoriteItem({user, handleCardClick}) {
   console.log(user)
  return (
    <div className='favorites'>
        <h3>Your favorites</h3>
        {user.favorites.map((trail) => (
          <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={trail.image} />
          <Card.Body>
            <Card.Title>{trail.name}</Card.Title>
            <Card.Text className='text-truncate'>
             {trail.description}
            </Card.Text>
            <Button variant="primary" onClick={() => handleCardClick(trail)}>Details</Button>
          </Card.Body>
        </Card>
        ))}
    </div>
  );
}

export default FavoriteItem;