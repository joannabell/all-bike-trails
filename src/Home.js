import React from 'react';
import NavBar from './NavBar'
import SearchBar from './SearchBar'


function Home({searchValue, handleSearchChange}) {
  return (

    <div className="Home">
      <NavBar />
      <div id="searchDiv">
        <SearchBar handleSearchChange={handleSearchChange} searchValue={searchValue}/>
      </div>
    </div>
  );
}

export default Home;