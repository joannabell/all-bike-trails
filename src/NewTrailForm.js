import React, { useState } from 'react';

function NewTrailForm( setTrails, trails ) { 
    const [formData, setFormData] = useState({
        id: Date.now(),
        name: "",
        state: "",
        lengthMiles: 0,
        difficulty: "easy",
        isHilly: false,
        description: "",
        features: "",
        mapPDF: "",
        image: "",
        comments: ""
    })
  
    function handleChange(e) {
        const name = e.target.name
        let value = e.target.value

        if(e.target.type === "checkbox"){value = e.target.checked}

        setFormData({...formData, [name]: value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        fetch("http://localhost:3000/bikeTrails", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json" 
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(newTrail => setTrails([...trails, newTrail]))
    }

    return ( //uses label and h3 tags, we will see which is better
    <div className="NewTrailForm">
        <form onSubmit={handleSubmit} className="add-trail-form">
            <label for="name">Name of Trail:</label> 
            <input
                onChange={handleChange}
                value={formData.name}
                type="text"
                name="name"
                id="name"
                placeholder="Enter bike trail name..."
                className="input-text"
            />
            <br />
            <h3>State:</h3>
            <select value={formData.state} onChange={handleChange} name="state">
                <option value="AL">Alabama</option>
                <option value="AK">Alaska</option>
                <option value="As">Arizona</option>
                <option value="AR">Arkansas</option>
                <option value="CA">California</option>
                <option value="CO">Colorado</option>
                <option value="CT">Conneticut</option>
                <option value="DE">Delaware</option>
                <option value="FL">Florida</option>
                <option value="GA">Georgia</option>
                <option value="HI">Hawaii</option>
                <option value="ID">Idaho</option>
                <option value="IL">Illinois</option>
                <option value="IN">Indiana</option>
                <option value="IA">Iowa</option>
                <option value="KS">Kansas</option>
                <option value="KY">Kentucky</option>
                <option value="LA">Louisiana</option>
                <option value="ME">Maine</option>
                <option value="MA">Massachusetts</option>
                <option value="MI">Michigan</option>
                <option value="MN">Minnesota</option>
                <option value="MS">Mississippi</option>
                <option value="MO">Missouri</option>
                <option value="MT">Montana</option>
                <option value="NE">Nebraska</option>
                <option value="NV">Nevada</option>
                <option value="NH">New Hampshire</option>
                <option value="NJ">New Jersey</option>
                <option value="NM">New Mexico</option>
                <option value="NY">New York</option>
                <option value="NC">North Carolina</option>
                <option value="ND">North Dakota</option>
                <option value="OH">Ohio</option>
                <option value="OK">Oklahoma</option>
                <option value="OR">Oregon</option>
                <option value="PA">Pennsylvania</option>
                <option value="RI">Rhode Island</option>
                <option value="SC">South Carolina</option>
                <option value="SD">South Dakota</option>
                <option value="TN">Tennessee</option>
                <option value="TX">Texas</option>
                <option value="UT">Utah</option>
                <option value="VT">Vermont</option>
                <option value="VI">Virginia</option>
                <option value="WA">Washington</option>
                <option value="WV">West Virginia</option>
                <option value="WI">Wisconsin</option>
                <option value="WY">Wyoming</option>
            </select>
            <br />
            <h3>Miles:</h3>
            <input
                onChange={handleChange}
                value={formData.miles}
                type="number"
                name="lengthMiles"
                placeholder="Miles..."
                className="input-number"
            />
            <br />
            <h3>Difficulty:</h3>
            <select value={formData.difficulty} onChange={handleChange} name="difficulty">
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
            <br />
            <h3>Is the trail hilly?</h3>
            <input
                onChange={handleChange}
                value={formData.isHilly}
                type="checkbox"
                name="isHilly"
                className="input-check"
            />
            <br />
            <h3>Description:</h3>
            <input
                onChange={handleChange}
                value={formData.description}
                type="text"
                name="description"
                placeholder="Enter trail description..."
                className="input-text"
            />
            <br />
            <h3>Features:</h3>
            <input
                onChange={handleChange}
                value={formData.features}
                type="text"
                name="features"
                placeholder="Enter trail features..."
                className="input-text"
            />
            <br />
            <h3>Map PDF Link:</h3>
            <input
                onChange={handleChange}
                value={formData.mapPDF}
                type="text"
                name="mapPDF"
                placeholder="Enter a .pdf map..."
                className="input-text"
            />
            <br />
            <h3>Picture of Trail:</h3>
            <input
                onChange={handleChange}
                value={formData.image}
                type="text"
                name="image"
                placeholder="Enter trail image..."
                className="input-text"
            />
            <br />
            <input type="submit"/>
        </form>
    </div>
  );
}

export default NewTrailForm;