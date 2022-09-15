import React, { useState } from 'react';
import NavBar from "./NavBar";
import SearchBar from "./SearchBar"
import Button from 'react-bootstrap/Button';
import { useHistory, useParams } from 'react-router-dom';

function BikeTrail({ trail, trails, handleDelete, handleComments }) {
  const history = useHistory();
  const [comments, setComments] = useState("")
  const { id } = useParams()

  function deleteTrail() {
    fetch(`http://localhost:3000/bikeTrails/${id}`, {
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
    <div className="details-page">
      <Button className="btn-light" id="go-back" onClick={() => history.goBack()}>Go back</Button>
      <header style={{backgroundImage:`url(${trail.image})`, height: "500px"}}>
      </header>
      <div className='specs' style={{backgroundColor: "darkgreen", fontSize: "20px", height: "65px"}}>
        
        <p style={{color: "white"}}>{trail.difficulty}</p>
        <p style={{color: "white"}}>{trail.lengthMiles} miles</p>
        <p style={{color: "white"}}>{trail.isHilly ? "Turraine: hilly" : "Turraine: flat"}</p>
        </div>
      <h1 className='details-title'>{trail.name}</h1>
      <p style={{textAlign: "center", fontSize: "20px", color: "gray"}}>{trail.state}</p>
      <div className="BikeTrail">
   
    
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