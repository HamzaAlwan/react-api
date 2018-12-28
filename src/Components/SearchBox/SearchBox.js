import React from 'react';

import './SearchBox.css';

const SearchBox = ({ searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="tc pa3 ba b--lightest-blue bg-lightest-blue"
        type="search"
        placeholder="search users"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
