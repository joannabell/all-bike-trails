function Recommendations({trail}){
    return (
        <div className="rec-card">
            <img src={trail.image} />
            <h3>{trail.name.length > 36 ? `${trail.name.slice(0,36)}...` : trail.name}</h3>
            <p id='trail-state'>{trail.state}</p>
            <p id="trail-difficulty"> Difficulty: <span>{trail.difficulty}</span> • Length: {trail.lengthMiles} miles</p>
            <p>{trail.comments.length} comments</p>
        </div>
    )
}

export default Recommendations;