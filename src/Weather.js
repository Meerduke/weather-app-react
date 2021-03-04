import React, { useState } from "react";
import axios from "axios";
import WeatherConditions from "./WeatherConditions";
import Forecast from "./Forecast";
import Footer from "./Footer";

import "./Weather.css";

export default function Weather(props) {
  const apiKey =`aae79086babd8e5274d8186968279eae`;
  const [weather,setWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.city);
  
  function showWeather(response){
    setWeather({
      ready: true,
      temperature: response.data.main.temp,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      city: response.data.name,
      lat: response.data.coord.lat,
      lon:response.data.coord.lon
  } 
  );
}

function search(){
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(showWeather);
}

function handleSubmit(event){
      event.preventDefault();
      search();
  }

function handleCitySearch(event){
  setCity(event.target.value);
}  


function showPosition (position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let currentCityUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(currentCityUrl).then(showWeather);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showPosition)
}

if (weather.ready) {
  return(
  <div className="Weather">

      <h1>Weather Forecast</h1>

      <h2>Current weather in {weather.city}</h2>

    <WeatherConditions data={weather}/>
    <Forecast lat={weather.lat} lon={weather.lon}/>
    
    <hr />

    <form className="Form" onSubmit={handleSubmit}>
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
                    onChange={handleCitySearch}
                  />
                </div>
                <div className="col-auto search-button">
                  <input onSubmit={handleSubmit}
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
                    onClick={getCurrentLocation}
                  />
                </div>
             </div>
    </form>

    <Footer />  

  </div>
  );
} else {
  search();
  return (
  <p>Loading...</p>
   );
 }
}
