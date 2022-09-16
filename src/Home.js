import React from 'react';
import NavBar from './NavBar'
import SearchBar from './SearchBar'
import Recommendations from './Recommendations';

function Home({ handleCardClick, trails, searchValue, handleSearchChange, updateSearchQuery, validateUser}) {
  let exampleTrails = []

  exampleTrails = trails.slice(0, 4)
  
  return (

    <div className="Home">
      <div id="searchDiv">
        <SearchBar 
        handleSearchChange={handleSearchChange} 
        searchValue={searchValue} 
        updateSearchQuery={updateSearchQuery}/>
      </div>
      <div>
        <div className='about-section'>
          <div className='about-signup'>
            <img src="https://cdn-icons-png.flaticon.com/512/33/33308.png"/>
            <h3>Join the community</h3>
            <p>Sign up to join the community and receive updates on new trails near you!</p>
          </div>
          <div className='about-confidence'>
            <img src="https://cdn-icons-png.flaticon.com/512/3198/3198344.png"/>
            <h3>Bike with confidence</h3>
            <p>All Bike Trails gives you real personal experiences to enhance your cycling!</p>
          </div>

        </div>
      </div>
      <div className='examples-box'>
      <h3 className='rec-title'>Recommendations for you</h3>
      <div id="examples">
        {exampleTrails.map(trail => <div className='example-cards'> <Recommendations handleCardClick={handleCardClick} trail={trail}/></div>)}
      </div>
      </div>
    </div>
  );
}

export default Home;