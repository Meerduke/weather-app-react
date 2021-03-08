import React,{ useState } from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcons from "./WeatherIcons";

import "./ForecastPreview.css";

export default function ForecastPreview(props){
    const [unit, setUnit] = useState("celsius");
    console.log(props.data);

    function showFahrenheit(event){
      event.preventDefault();
      setUnit("fahrenheit");
  }

  function showCelsius(event){
      event.preventDefault();
      setUnit("celsius");
  }
  
  function fahrenheit(){
    return (props.data.temp.day * 9) / 5 + 32;
  }

if (unit === "celsius"){
    return(
    <div className="ForecastPreview col">
                        <FormattedDate date={new Date(props.data.dt*1000)} forecast={true}/>
                    <br />
                        <WeatherIcons code={props.data.weather[0].icon}/>
                    <span>
                        {Math.round(props.data.temp.day)}
                    </span>
                    <span href="/" className="celsius">
                         °C
                    </span>
                        {""} | {""}
                    <a href="/" className="fahrenheit" onClick={showFahrenheit}>
                         °F
                    </a> 
             </div>
    );
}else{
    return(
        <div className="ForecastPreview col">
                        <FormattedDate date={new Date(props.data.dt*1000)} forecast={true}/>
                    <br />
                        <WeatherIcons code={props.data.weather[0].icon}/>
                    <span>
                        {Math.round(fahrenheit())}
                    </span>
                    <a href="/" className="celsius" onClick={showCelsius}>
                         °C
                    </a>
                        {""} | {""}
                    <span href="/" className="fahrenheit">
                         °F
                    </span>
             </div>
    )

}
}