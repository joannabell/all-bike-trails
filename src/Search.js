import React from "react";
import BikeTrailCard from "./BikeTrailCard";
import SearchBar from "./SearchBar"

function Search ({searchValue, handleSearchChange}) {

    return (
        <div>
            <SearchBar searchValue={searchValue} handleSearchChange={handleSearchChange}/>
            <div>
                <BikeTrailCard />
            </div>
        </div>
    )
}

export default Search