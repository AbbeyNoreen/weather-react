import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form id="search-form">
      <input
        type="search"
        placeholder="Enter City Here"
        autoComplete="off"
        autoFocus="on"
        id="city-form"
      />
      <div className="row">
        <div className="col-6" id="current-button">
          <input type="button" value="Current" className="button" />
        </div>
        <div class="col-6" id="search-button">
          <input type="submit" value="Search" className="button" />
        </div>
      </div>
    </form>
  );
}