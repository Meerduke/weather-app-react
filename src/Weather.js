import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weather,setWeather] = useState({ ready: false });

  function handleSubmit(event){
      event.preventDefault();
  }
  
  function showWeather(response){
    console.log(response);
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
      date: "Tuesday 16 February 15:12",
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name
  } 
  );
}

if (weather.ready) {
  return(
  <div className="Weather">

      <h1>Weather Forecast</h1>

      <h2>Current weather in {weather.city}</h2>

      <div className="row Temperature">
      <span>
        <span>
          {Math.round(weather.temperature)}
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
        <li className="text-capitalize description">{weather.description}</li>
        <li>
          Humidity:
          {weather.humidity}% Wind:
          {Math.round(weather.wind)} Km/H
        </li>
      </ul>
      <ul className="col-6 icon-date">
        <li><img src={weather.icon} alt={weather.description} /></li>
        <li className="current-date-time">{weather.date}</li>
      </ul>
    </div>

    <div className="row Forecast">
                <div className="col-md-auto">
                    Monday
                    <br />
                    <i className="far fa-snowflake"></i>
                    <br />
                    <span>
                        4°C | -2°C
                    </span>
                </div>
                <div className="col-md-auto">
                    Tuesday
                    <br />
                    <i className="far fa-snowflake"></i>
                    <br />
                    <span>
                        4°C | -2°C
                    </span>
                </div>
                <div className="col-md-auto">
                    Wednesday
                    <br />
                    <i className="fas fa-cloud-sun"></i>
                    <br />
                    <span>
                        4°C | -2°C
                    </span>
                </div>
                <div className="col-md-auto">
                    Thursday
                    <br />
                    <i className="fas fa-cloud"></i>
                    <br />
                    <span>
                        4°C | -2°C
                    </span>
                </div>
                <div className="col-md-auto">
                    Friday
                    <br />
                    <i className="fas fa-cloud-rain"></i>
                    <br />
                    <span>
                        4°C | -2°C
                    </span>
                </div>
            </div>

            <hr />

            <form className="Form">
              <div className="row change-location">
                <div className="col-auto">
                  <label for="change-city" className="col-form-label">
                   Change your location
                  </label>
                </div>
                <div className="col-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter city"
                    autoComplete="off"
                    autoFocus="on"
                  />
                </div>
                <div className="col-auto search-button">
                  <input
                    type="submit"
                    className="btn btn-info w-100"
                    value="Search"
                  />
                </div>
                <div className="col-auto">
                   <input
                    type="submit"
                    className="btn btn-info w-100"
                    value="Current Location"
                  />
                </div>
             </div>
          </form>
    </div>
  );
} else {
  let apiKey = `aae79086babd8e5274d8186968279eae`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showWeather);
  return (
  <p>Loading...</p>
   );
 }
}
