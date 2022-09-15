import React from "react";
import NavBar from "./NavBar";
import BikeTrailCard from "./BikeTrailCard";
import SearchBar from "./SearchBar"


function Search ({trails, searchValue, handleSearchChange, searchQuery, updateSearchQuery, handleCardClick }) {

    const showTrails = trails.map((trail) => <BikeTrailCard handleCardClick={handleCardClick} trail={trail}/>)

    return (
        <div>
            <SearchBar 
            searchValue={searchValue} 
            handleSearchChange={handleSearchChange} 
            updateSearchQuery={updateSearchQuery}
            />
            <p style={{marginTop: "20px"}}>{searchQuery.length === 0? "" : `showing results for ${searchQuery}...` }</p>
            <div className="trails-container">
                {showTrails}
            </div>
        </div>
    )
}

export default Search