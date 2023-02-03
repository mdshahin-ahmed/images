import React, { useState } from "react";

const SearchBar = ({ onSubmit }) => {
  const [term, setTerm] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    onSubmit(term);
  };
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input onChange={(e) => setTerm(e.target.value)} type="text" />
      </form>
    </div>
  );
};

export default SearchBar;
