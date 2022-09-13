import React from 'react';
import NavBar from './NavBar'
import SearchBar from './SearchBar'


function Home() {
  return (

    <div className="Home">
      <NavBar />
      <div id="searchDiv">
        <SearchBar />
      </div>
    </div>
  );
}

export default Home;