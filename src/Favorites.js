import React from 'react';
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import FavoriteItem from "./FavoriteItem"

function Favorites({currentUser}){

   
    return (
        <div>
            {currentUser.map((user) => <FavoriteItem user={user}/>)}
        </div>
    )
}

export default Favorites