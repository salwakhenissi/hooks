import React, { useState } from "react";
import Rate from "./Rate";
import "./style.css";
function Search({ hundelClick, setSearch, searchByRate, setRats }) {
  return (
    <div className="header">
      <div className="search">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Film..."
        />
      </div>
      <div className="searchName">
        <Rate rate={searchByRate} setRats={setRats} />
      </div>
    </div>
  );
}

export default Search;