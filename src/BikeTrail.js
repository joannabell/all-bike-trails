import React, { useState } from 'react';
import NavBar from "./NavBar";
import SearchBar from "./SearchBar"
import { useHistory } from 'react-router-dom';

function BikeTrail({ trail, trails, handleDelete, handleComments }) {
  const history = useHistory();
  const [comments, setComments] = useState("")

  function deleteTrail() {
    fetch(`http://localhost:3000/bikeTrails/${trail.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    const updatedTrails = trails.filter(item => item.id !== trail.id)
    handleDelete(updatedTrails)
    history.push("/")
    alert("Trail Deleted!")
  }

  function handleSubmit(e) {
    e.preventDefault()
    const newComments = [...trail.comments, comments]
    const updatedTrail = {...trail, comments: newComments}
    fetch(`http://localhost:3000/bikeTrails/${trail.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(updatedTrail)
    })
    .then(res => res.json())
    .then(() => {
      const newTrails = trails.map(item => {
        if(item.id === trail.id){return updatedTrail}
        else{return item}
      })
      handleComments(newTrails, updatedTrail)
      console.log(newTrails)
    })
    setComments("")
  }

  function handleChange(e) {
    setComments(e.target.value)
  }

  return (
    <div>
      <button onClick={() => history.goBack()}>Go back</button>
      <div className="BikeTrail">
        <h1>{trail.name}</h1>
        <p>State: {trail.state}</p>
        <img src={trail.image} style={{width:"600px"}}/>
        <p>{trail.difficulty}</p>
        <p>{trail.lengthMiles} Miles</p>
        <p>{trail.isHilly ? "Is a hilly ride" : "Is not a hilly ride"}</p>
        <h2>Description:</h2>
        <p>{trail.description}</p>
        <h2>Features:</h2>
        <p>{trail.features}</p>
        <iframe src={trail.mapPDF} />
        <h2>Comments:</h2>
        {trail.comments.map((comment, index) => <p key={index}>{comment}</p>)}
        <form onSubmit={handleSubmit}>
          <input onChange={handleChange} value={comments} type="text" name="comments" placeholder='Add Comments Here!'/>
          <input type="submit" />
        </form>
        <button onClick={deleteTrail}>Delete Trail</button>
      </div>
    </div>
  );
}

export default BikeTrail;