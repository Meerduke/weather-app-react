import React, { useState } from "react";
import axios from "axios";
import ForecastPreview from "./ForecastPreview";

import "./Forecast.css";


export default function Forecast(props){
 const [loaded, setLoaded]= useState(false);
 const [forecast, setForecast] =useState(null);   

function showForecast(response){
    setForecast(response.data);
    setLoaded(true);
}

 if(loaded && props.lat === forecast.lat && props.lon === forecast.lon){
    return(
        <div className="Forecast row">
            {forecast.daily.slice(1, 6).map(function (forecastItem) {
                return <ForecastPreview data={forecastItem}/>;
            })} 
        </div>
);
}else{
    let apiKey =`aae79086babd8e5274d8186968279eae`;
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showForecast);
    
    return null;
}
}