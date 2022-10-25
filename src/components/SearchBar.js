import { useState } from "react";
import React from "react";

const SearchBar = ({ handleSubmit, value, onChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="form-control"
        placeholder="Search"
        value={value}
        onChange={onChange}
      />
    </form>
  );
};

export default SearchBar;
/*<button type="submit" value="Search" className="btn">
 Search
 </button>*/
