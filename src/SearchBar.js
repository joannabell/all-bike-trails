import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function SearchBar({searchValue, handleSearchChange, updateSearchQuery}) {
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault()
    history.push("/search") 
    
    updateSearchQuery(searchValue)
  }

  return (
    <>
    <div className='background-image'></div>
    <div className="SearchBar">
      <form className='search-bar' onSubmit={handleSubmit}>
        <h1>Find a trail near you</h1>
        <input
        type="text"
        placeholder="Search by trail name or keyword" 
        className='search-input'
        value={searchValue}
        onChange={handleSearchChange}
        />
        <input type="submit" value="Search" className='search-submit'/>
      </form>
    </div>
    </>
  );
}

export default SearchBar;