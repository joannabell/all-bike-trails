import React, { useState, useEffect } from 'react';
import NavBar from "./NavBar";
import SearchBar from "./SearchBar"
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Button from 'react-bootstrap/Button';
import { useHistory, useParams } from 'react-router-dom';

function BikeTrail({ trails, handleDelete, handleComments }) {
  const history = useHistory();
  const [ trail, setTrail ] = useState({})
  const [comments, setComments] = useState("")
  const [ addComment, setAddComments ] = useState(false)
  const { id } = useParams()
  const [ comment, setComment ] = useState("")

  useEffect(() => {
    fetch(`http://localhost:3000/bikeTrails/${id}`)
    .then(res => res.json())
    .then(bikeTrails => {
    setTrail(bikeTrails)
    setComments(bikeTrails.comments)
    })
  }, [])



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
    const newComments = [...trail.comments, comment]
    const updatedTrail = {...trail, comments: newComments}
    fetch(`http://localhost:3000/bikeTrails/${id}`, {
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
      setAddComments(false)
      setComments([...comments, comment])
    })
    setComment("")
  }

  function handleChange(e) {
    setComment(e.target.value)
  }

  const handleAddComment = () => setAddComments((addComment) => !addComment)
  

  return (
    <div className="details-page">
      <Breadcrumb className='pt-3'>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item onClick={() => history.goBack()}>
        Search
      </Breadcrumb.Item>
      <Breadcrumb.Item active>{trail.name}</Breadcrumb.Item>
    </Breadcrumb> 
      
      <header style={{backgroundImage:`url(${trail.image})`, height: "500px"}}>
      </header>
      <div className='specs' style={{backgroundColor: "darkgreen", fontSize: "16px", height: "60px", fontWeight: 300}}>
        <p style={{color: "white"}}>Difficulty : {trail.difficulty}</p>
        <p style={{color: "white"}}>Length : {trail.lengthMiles} miles</p>
        <p style={{color: "white"}}>{trail.isHilly ? "Turraine : Hilly" : "Turraine : Flat"}</p>
      </div>
      <h1 style={{marginTop: "20px"}}className='details-title'>{trail.name}</h1>
      <p style={{textAlign: "center", fontSize: "20px", color: "gray"}}>{trail.state}</p>
      <div className="trail-info" style={{margin:"0 60px"}}>
        <h3>Description</h3>
        <p>{trail.description}</p>
        <h3>Features</h3>
        <p>{trail.features}</p>
        <iframe src={trail.mapPDF} style={{height:"250px", border: "2px black solid", width: "250px"}}/>
      <div className='comment-container'>
        <h2 style={{paddingBottom: "20px"}}>Comments</h2>
        <div className='add-comment'>
          {addComment ? <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={comment} type="text" name="comments" placeholder='Add Comments Here!' className='addComment'/>
            <input type="submit" />
          </form> : <Button variant="secondary" onClick={handleAddComment}>Add Comment</Button> }
        </div>
    
        <div className='comments' style={{paddingTop:"30px"}}>
          {comments.length > 0 ? comments.map((comment, index) =><div><p key={index}>{comment}</p><hr></hr></div>): null}
        </div>
      </div>

      <div style={{marginTop: "50px"}} >
        <Button variant="outline-dark" onClick={deleteTrail}>Delete Trail</Button>
      </div>
        
    </div>
    </div>
  );
}

export default BikeTrail;