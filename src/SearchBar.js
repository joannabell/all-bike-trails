import React, { useState } from 'react';

function SearchBar() {
  const [ searchValue, setSearchValue ] = useState("")

  function handleSearchChange(event) {
    setSearchValue(event.target.value)
  }

  return (
    <div className="SearchBar">
      <form className='search-bar'>
        <input
        type="text"
        placeholder="Search by state or trail name" 
        value={searchValue}
        onChange={handleSearchChange}
        />
        <input type="submit" value="Search" />
      </form>
    </div>
  );
}

export default SearchBar;