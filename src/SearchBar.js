import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';


function SearchBar({searchValue, handleSearchChange}) {
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault()
    console.log("click")
    history.push("/search") 
  }

  return (
    <div className="SearchBar">
      <form className='search-bar' onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Search by state or trail name" 
        value={searchValue}
        onChange={handleSearchChange}
        />
        <input type="submit" value="Search"/>
      </form>
    </div>
  );
}

export default SearchBar;