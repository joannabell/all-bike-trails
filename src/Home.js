import React from 'react';
import NavBar from './NavBar'
import SearchBar from './SearchBar'
import BikeTrailCard from './BikeTrailCard';
import NewTrail from './NewTrail';


function Home({ handleCardClick, trails, searchValue, handleSearchChange, updateSearchQuery}) {
  let exampleTrails = []

  exampleTrails = trails.slice(0, 3)
  
  return (

    <div className="Home">
      <NavBar />
      <div id="searchDiv">
        <SearchBar handleSearchChange={handleSearchChange} searchValue={searchValue} updateSearchQuery={updateSearchQuery}/>
      </div>
      <div id="examples">
        {exampleTrails.map(trail => <BikeTrailCard handleCardClick={handleCardClick} trail={trail}/>)}
      </div>
      <p>About Section:</p>
    </div>
  );
}

export default Home;