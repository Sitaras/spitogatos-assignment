import React from "react";
import "./Search.css";
import CloseSearch from "../../../imgs/CloseSearch.svg";
import { useStateContext } from "../../../Contexts/ContextProvider";

function Search() {
  const { setSearch } = useStateContext();
  return (
    <section>
      <div className="containerSearch">
        <img
          src={CloseSearch}
          alt="close search"
          className="closeSearch"
          onClick={() => setSearch(false)}
        />
        <div className="innerContainer">
          <input
            type="text"
            className="customInput"
            placeholder="Start Typing"
          />
        </div>
        <div className="innerContainer">
          <button className="searchBtn">Search</button>
        </div>
      </div>
    </section>
  );
}

export default Search;
