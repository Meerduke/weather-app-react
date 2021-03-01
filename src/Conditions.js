import React from "react";
import "./Conditions.css";

export default function Conditions() {
  let weatherData = {
    icon: <i className="fas fa-cloud-rain"></i>,
    date: "Tuesday 16 February 15:12",
    conditions: "Rainy",
    humidity: 80,
    wind: 16
  };

  return (
    <div className="row Conditions">

      <ul className="col-6">
        <li className="description">{weatherData.conditions}</li>
        <li>
          Humidity:
          {weatherData.humidity}% Wind:
          {weatherData.wind} Km/H
        </li>
      </ul>

      <ul className="col-6">
        <li className="current-icon">{weatherData.icon}</li>
        <li className="current-date-time">{weatherData.date}</li>
      </ul>

    </div>
  );
}
