import React from 'react';
import NavBar from './NavBar'
import SearchBar from './SearchBar'


function Home({searchValue, handleSearchChange, updateSearchQuery}) {
  return (

    <div className="Home">
      <NavBar />
      <div id="searchDiv">
        <SearchBar handleSearchChange={handleSearchChange} searchValue={searchValue} updateSearchQuery={updateSearchQuery}/>
      </div>
    </div>
  );
}

export default Home;