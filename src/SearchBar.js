import React, { useState } from 'react';

function SearchBar() {
  const [ searchValue, setSearchValue ] = useState("")

  function handleSearchChange(event) {
    setSearchValue(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault()
    console.log("click")
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