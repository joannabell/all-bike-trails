import React, { useState } from "react";
import BikeTrailCard from "./BikeTrailCard";
import SearchBar from "./SearchBar"

function Search ({searchValue, handleSearchChange, searchQuery, updateSearchQuery}) {


    return (
        <div>
            <SearchBar 
            searchValue={searchValue} 
            handleSearchChange={handleSearchChange} 
            updateSearchQuery={updateSearchQuery}
            />
            <p>{searchQuery.length === 0? "" : `Showing results for ${searchQuery}...` }</p>
            <div>
                <BikeTrailCard />
            </div>
        </div>
    )
}

export default Search