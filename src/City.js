import React from "react";
import "./City.css";

export default function City() {
  let currentCity = "Berlin";

  return (
    <div className="City">
      <h2>Current weather in {currentCity}</h2>;
    </div>
  );
}
