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
      <button type="submit" value="Search" className="btn"></button>
    </form>
  );
};

export default SearchBar;
