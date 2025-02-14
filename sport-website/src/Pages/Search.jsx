import React from "react";
import { useState } from "react";

const Search = () => {
  const [search, setSearch] = useState("");

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="search"></label>
      <input
        type="text"
        role="search"
        placeholder="Search Sports"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
