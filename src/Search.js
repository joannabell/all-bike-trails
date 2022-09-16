import React, { useState } from "react";
import NavBar from "./NavBar";
import BikeTrailCard from "./BikeTrailCard";
import SearchBar from "./SearchBar"
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function Search ({trails, searchValue, handleSearchChange, searchQuery, updateSearchQuery, handleCardClick }) {
    const [diffFilter, setDiffFilter] = useState("")
    const [terrainFilter, setTerrainFilter] = useState(false)

    const diffFilteredTrails = trails.filter(trail => {
        if(diffFilter === "") return trail
        if(diffFilter === trail.difficulty) return trail
    })

    const terrainFilteredTrails = diffFilteredTrails.filter(trail => {
        if(terrainFilter === false) return trail;
        if(true === terrainFilter) return trail.isHilly === false
    })

    const showTrails = terrainFilteredTrails.map((trail, index) => <div><BikeTrailCard key={index} handleCardClick={handleCardClick} trail={trail}/><hr></hr></div>)

    function handleTerrain(e) {
        setTerrainFilter(e.target.checked)
    }
    
    function handleDifficulty(e) {
        setDiffFilter(e.target.value)
    }

    return (
        <div>
            <SearchBar 
            searchValue={searchValue} 
            handleSearchChange={handleSearchChange} 
            updateSearchQuery={updateSearchQuery}
            />
            <div className="search-results">
            <div className="search-filters">
         
            <Container className="d-flex align-items-start">
            <Row>
            <Col>
            <Form.Group as={Col}  controlId="formDifficulty" className="mb-3 my-1">
                <Form.Select id="difficultyFilter" value={diffFilter} onChange={handleDifficulty} name="difficulty" defaultValue="Choose a Difficulty">
                    <option style={{color: '#00A300'}} value="">Difficulty Level...</option>
                    <option style={{color: '#00A300'}} value="easy">Easy</option>
                    <option style={{color: '#FFFF00'}} value="medium">Medium</option>
                    <option style={{color: '#E32227'}} value="hard">Hard</option>
                </Form.Select>
            </Form.Group >
            </Col>
            <Col>
            <Form.Group as={Col}  id="searchCheckbox" className="mb-3 my-1" >
                <Form.Check onChange={handleTerrain} type="checkbox" name="terrain" label="Flat terrain"/>
            </Form.Group>
            </Col>
            </Row>
            </Container>
          
            </div>
            <hr></hr>
            <p style={{margin: "20px"}}>{searchQuery.length === 0? "" : `Showing results for ${searchQuery}...` }</p>
            </div>
            <div className="trails-container">
                {showTrails}
            </div>
        </div>
    )
}

export default Search