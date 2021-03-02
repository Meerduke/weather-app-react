import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcons from "./WeatherIcons";

export default function WeatherConditions(props){

    function handleSubmit(event){
      event.preventDefault();
  }

    return (
    <div className="WeatherConditions">
    <div className="row Temperature">
      <span>
        <span>
          {Math.round(props.data.temperature)}
        </span>
          <span className="units">
           {""} <a className="celsius" href="/" onClick={handleSubmit}>
            °C
          </a>
          {""} | {""}
          <a className="fahrenheit" href="/" onClick={handleSubmit}>
            °F
          </a>
        </span>  
      </span>
    </div>

    <div className="row Conditions">
      <ul className="col-6 Description">
        <li className="text-capitalize description">{props.data.description}</li>
        <li>
          Humidity:{" "}
          {props.data.humidity}% Wind:{" "}
          {Math.round(props.data.wind)} Km/H
        </li>
      </ul>
      <ul className="col-6 icon-date">
        <li className="icon"><WeatherIcons code={props.data.icon} /></li>
        <li className="current-date-time"><FormattedDate date={props.data.date} /></li>
      </ul>
    </div>
    </div>
    );
}