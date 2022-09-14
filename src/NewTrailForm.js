import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { useHistory } from 'react-router-dom';

function NewTrailForm( setTrails, trails ) { 
    const history = useHistory()
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
        history.push("/")
        alert("New Trail Successfully Added!")
    }

    return ( //uses label and h3 tags, we will see which is better
    <div className="FormContainer">
        <Form id="NewTrailForm" onSubmit={handleSubmit} className="m-3" style={{width: '60%'}}>
            <Form.Group className="mb-3" controlId="formGridName">
                <Form.Label>Trail Name:</Form.Label>
                <Form.Control 
                    onChange={handleChange}
                    value={formData.name}
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter bike trail name..."
                    className="input-text"
                />
            </Form.Group>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select value={formData.state} onChange={handleChange} name="state" defaultValue="Choose...">
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
                    </Form.Select>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridLength">
                    <Form.Label>Length in Miles:</Form.Label>
                    <Form.Control 
                        onChange={handleChange}
                        value={formData.miles}
                        type="number"
                        name="lengthMiles"
                        placeholder="Miles..."
                        className="input-number"
                    />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridDifficulty">
                    <Form.Label>Difficulty</Form.Label>
                    <Form.Select value={formData.difficulty} onChange={handleChange} name="difficulty" defaultValue="Choose a Difficulty">
                        <option style={{color: '#00A300'}} value="easy">Easy</option>
                        <option style={{color: '#FFFF00'}} value="medium">Medium</option>
                        <option style={{color: '#E32227'}} value="hard">Hard</option>
                    </Form.Select>
                </Form.Group>
            </Row>
            <Form.Group className="mb-3" controlId="formGridDescription">
                <Form.Label>Description:</Form.Label>
                <Form.Control
                    onChange={handleChange}
                    value={formData.description}
                    type="text"
                    name="description"
                    placeholder="Enter trail description..."
                    className="input-text"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridDescription">
                <Form.Label>Features:</Form.Label>
                <Form.Control 
                    onChange={handleChange}
                    value={formData.features}
                    type="text"
                    name="features"
                    placeholder="Enter trail features..."
                    className="input-text"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridImage">
                <Form.Label>Upload an Image from Link:</Form.Label>
                <Form.Control 
                    onChange={handleChange}
                    value={formData.image}
                    type="text"
                    name="image"
                    placeholder="Enter trail image link..."
                    className="input-text"
                />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formGridMap">
                <Form.Label>Upload a Map from PDF Link:</Form.Label>
                <Form.Control 
                    onChange={handleChange}
                    value={formData.mapPDF}
                    type="text"
                    name="mapPDF"
                    placeholder="Enter a .pdf map..."
                    className="input-text"
                />
            </Form.Group>
            <Row>
                <Form.Group as={Col} className="mb-3" id="formGridCheckbox">
                    <Form.Check type="checkbox" label="Is the trail hilly?" />
                </Form.Group>

                <Form.Group as={Col} className="mb-3" id="formGridSubit">
                    <Button style={{float: "right"}} variant="primary" type="submit">
                        Submit
                    </Button>
                </Form.Group>
            </Row>
        </Form>
    </div>
  );
}

export default NewTrailForm;