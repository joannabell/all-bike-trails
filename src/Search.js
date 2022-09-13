import React from "react";
import NavBar from "./NavBar";
import BikeTrailCard from "./BikeTrailCard";
import SearchBar from "./SearchBar"

function Search ({ trails, searchValue, handleSearchChange }) {

    return (
        <div>
            <NavBar />
            <SearchBar searchValue={searchValue} handleSearchChange={handleSearchChange}/>
            <div>
                {trails.map(trail => <BikeTrailCard name={trail.name} length={trail.lengthMiles} description={trail.description} image={trail.image} />)}
            </div>
        </div>
    )
}

export default Search