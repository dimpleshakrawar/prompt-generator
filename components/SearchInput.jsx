"use client";

import React from 'react';

function SearchInput({ value, onChange }) {
  return (
    <input
      type="text"
      placeholder="Search for a tag or a username"
      value={value}
      required
      className="search_input peer"
      onChange={onChange}
    />
  );
}

export default SearchInput;
