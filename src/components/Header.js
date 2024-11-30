import React from "react";
import "../styles.css";

export default function Headers() {
  return (
    <div className="header">
      <img className="logo" src="logo.png" alt="moviedux" />
      <h2 className="app-subtitle">
        It's time for popcorn! Find yournex movie here.
      </h2>
    </div>
  );
}