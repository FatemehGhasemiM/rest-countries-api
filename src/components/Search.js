import React, { useState } from "react";

const Search = ({ onSearch }) => {
  const [input, setInput] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    onSearch(input);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="search"
        placeholder="Search for a country..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </form>
  );
};

export default Search;
