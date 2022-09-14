import React, { useState } from 'react';

function FavoriteItem({user}) {
   console.log(user)
  return (
    <div>
        <h3>{user.firstName}'s favorites!</h3>
        {user.favorites.map((trail) => (
            <div>{trail.name}</div>
        ))}
    </div>
  );
}

export default FavoriteItem;