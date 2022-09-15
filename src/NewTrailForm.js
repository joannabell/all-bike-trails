import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useHistory } from 'react-router-dom';

function NewTrailForm({ addTrails }) { 
    const history = useHistory()
    const [formData, setFormData] = useState({
        id: Date.now(),
        name: "",
        state: "",
        lengthMiles: 0,
        difficulty: "",
        isHilly: false,
        description: "",
        features: "",
        mapPDF: "",
        image: "",
        comments: []
    })
  
    function handleChange(e) {
        const name = e.target.name
        let value = e.target.value

        if(e.target.type === "checkbox"){value = e.target.checked}

        setFormData({...formData, [name]: value})
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(formData.difficulty === "diff" || formData.difficulty === "") return alert("Please select a difficulty level!")
        if(formData.state === "State" || formData.state === "") return alert("Please select a State!")
        if(!(formData.mapPDF.toLowerCase().includes(".pdf".toLowerCase()))) return alert("Please enter a valid .pdf map!")
        else {
            fetch("https://radiant-sands-06167.herokuapp.com/bikeTrails", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "application/json" 
                },
                body: JSON.stringify(formData)
            })
            .then(res => res.json())
            .then(newTrail => addTrails(newTrail))
            history.push("/")
            alert("New Trail Successfully Added!")
        }
    }

    return (
    <div className="new-trail-container">
        <Form id="new-trail-form" onSubmit={handleSubmit} >
        <h2>Submit a New Trail</h2>
            <Form.Group className="mb-3" controlId="formGridName">
                <Form.Control 
                    onChange={handleChange}
                    value={formData.name}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter bike trail name..."
                    className="input-text mb-4"
                    required
                />
            </Form.Group>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Select value={formData.state} onChange={handleChange} name="state" defaultValue="Choose...">
                        <option value="State">State</option>
                        <option value="Alabama">AL</option>
                        <option value="Alaska">AK</option>
                        <option value="Arkansa">AR</option>
                        <option value="Arizona">AZ</option>
                        <option value="California">CA</option>
                        <option value="Colorado">CO</option>
                        <option value="Conneticut">CT</option>
                        <option value="Deleware">DE</option>
                        <option value="Florida">FL</option>
                        <option value="Georgia">GA</option>
                        <option value="Hawaii">HI</option>
                        <option value="Idaho">ID</option>
                        <option value="Illinois">IL</option>
                        <option value="Indiana">IN</option>
                        <option value="Iowa">IA</option>
                        <option value="Kansas">KS</option>
                        <option value="Kentucky">KY</option>
                        <option value="Louisiana">LA</option>
                        <option value="Maine">ME</option>
                        <option value="Massachusetts">MA</option>
                        <option value="Michigan">MI</option>
                        <option value="Minnesota">MN</option>
                        <option value="Mississippi">MS</option>
                        <option value="Missouri">MO</option>
                        <option value="Montana">MT</option>
                        <option value="Nebraska">NE</option>
                        <option value="Nevada">NV</option>
                        <option value="New Hampshire">NH</option>
                        <option value="New Jersey">NJ</option>
                        <option value="New Mexico">NM</option>
                        <option value="New York">NY</option>
                        <option value="North Carolina">NC</option>
                        <option value="North Dakota">ND</option>
                        <option value="Ohio">OH</option>
                        <option value="Oklahoma">OK</option>
                        <option value="Oregon">OR</option>
                        <option value="Pennslyvania">PA</option>
                        <option value="Rhode Island">RI</option>
                        <option value="South Carolina">SC</option>
                        <option value="South Dakota">SD</option>
                        <option value="Tennessee">TN</option>
                        <option value="Texas">TX</option>
                        <option value="Utah">UT</option>
                        <option value="Vermont">VT</option>
                        <option value="Virginia">VI</option>
                        <option value="Wwashington">WA</option>
                        <option value="West Virginia">WV</option>
                        <option value="Wisconsin">WI</option>
                        <option value="Wyoming">WY</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLength">
                    <Form.Control 
                        onChange={handleChange}
                        value={formData.miles}
                        type="number"
                        name="lengthMiles"
                        placeholder="Miles..."
                        className="input-number mb-4"
                        required
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridDifficulty">
                
                    <Form.Select value={formData.difficulty} onChange={handleChange} name="difficulty" defaultValue="Choose a Difficulty">
                        <option style={{color: '#00A300'}} value="diff">Difficulty</option>
                        <option style={{color: '#00A300'}} value="easy">Easy</option>
                        <option style={{color: '#FFFF00'}} value="medium">Medium</option>
                        <option style={{color: '#E32227'}} value="hard">Hard</option>
                    </Form.Select>
                </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridDescription">
               
                <Form.Control
                    onChange={handleChange}
                    value={formData.description}
                    type="text"
                    name="description"
                    placeholder="Enter trail description..."
                    className="input-text mb-4"
                    required
                />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formGridDescription">
                
                <Form.Control 
                    onChange={handleChange}
                    value={formData.features}
                    type="text"
                    name="features"
                    placeholder="Enter trail features..."
                    className="input-text"
                    required
                />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formGridImage">
                <Form.Control 
                    onChange={handleChange}
                    value={formData.image}
                    type="text"
                    name="image"
                    placeholder="Enter trail image link..."
                    className="input-text"
                    required
                />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formGridMap">
                
                <Form.Control 
                    onChange={handleChange}
                    value={formData.mapPDF}
                    type="text"
                    name="mapPDF"
                    placeholder="Enter a .pdf map..."
                    className="input-text"
                    required
                />
            </Form.Group>
            <Row>
                <Form.Group as={Col} className="mb-4" id="formGridCheckbox">
                    <Form.Check name="isHilly" onChange={handleChange} value={formData.isHilly} type="checkbox" label="Is the trail hilly?" />
                </Form.Group>

                <Form.Group as={Col} className="mb-3" id="formGridSubit">
                    <Button style={{float: "right"}} variant="primary" type="submit" className='btn-secondary'>
                        Submit
                    </Button>
                </Form.Group>
            </Row>
        </Form>
    </div>
  );
}

export default NewTrailForm;