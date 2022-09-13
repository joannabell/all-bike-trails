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
    <div className="SearchBar">
      <form className='search-bar' onSubmit={handleSubmit}>
        <input
        type="text"
        placeholder="Search by trail name or keyword" 
        value={searchValue}
        onChange={handleSearchChange}
        />
        <input type="submit" value="Search"/>
      </form>
    </div>
  );
}

export default SearchBar;