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

    return (
    <div className="content">
        <Form id="NewTrailForm" onSubmit={handleSubmit} className="m-3" style={{width: '60%' }}>
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
                        <option value="AL">AL</option>
                        <option value="AK">AK</option>
                        <option value="AS">AS</option>
                        <option value="AR">AR</option>
                        <option value="CA">CA</option>
                        <option value="CO">CO</option>
                        <option value="CT">CT</option>
                        <option value="DE">DE</option>
                        <option value="FL">FL</option>
                        <option value="GA">GA</option>
                        <option value="HI">HI</option>
                        <option value="ID">ID</option>
                        <option value="IL">IL</option>
                        <option value="IN">IN</option>
                        <option value="IA">IA</option>
                        <option value="KS">KS</option>
                        <option value="KY">KY</option>
                        <option value="LA">LA</option>
                        <option value="ME">ME</option>
                        <option value="MA">MA</option>
                        <option value="MI">MI</option>
                        <option value="MN">MN</option>
                        <option value="MS">MS</option>
                        <option value="MO">MO</option>
                        <option value="MT">MT</option>
                        <option value="NE">NE</option>
                        <option value="NV">NV</option>
                        <option value="NH">NH</option>
                        <option value="NJ">NJ</option>
                        <option value="NM">NM</option>
                        <option value="NY">NY</option>
                        <option value="NC">NC</option>
                        <option value="ND">ND</option>
                        <option value="OH">OH</option>
                        <option value="OK">OK</option>
                        <option value="OR">OR</option>
                        <option value="PA">PA</option>
                        <option value="RI">RI</option>
                        <option value="SC">SC</option>
                        <option value="SD">SD</option>
                        <option value="TN">TN</option>
                        <option value="TX">TX</option>
                        <option value="UT">UT</option>
                        <option value="VT">VT</option>
                        <option value="VI">VI</option>
                        <option value="WA">WA</option>
                        <option value="WV">WV</option>
                        <option value="WI">WI</option>
                        <option value="WY">WY</option>
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