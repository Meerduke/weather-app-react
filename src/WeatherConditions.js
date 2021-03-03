import React from "react";
import TemperatureConversion from "./TemperatureConversion";
import FormattedDate from "./FormattedDate";
import WeatherIcons from "./WeatherIcons";

export default function WeatherConditions(props){

    return (
    <div className="WeatherConditions">

    <TemperatureConversion celsius={props.data.temperature} />

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