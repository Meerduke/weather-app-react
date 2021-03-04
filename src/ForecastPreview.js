import React from "react";
import WeatherIcons from "./WeatherIcons";

export default function ForecastPreview(props){

  function hours(){
      let date = new Date(props.data.dt*1000);
      let hours = date.getHours();
        if (hours < 10){
            hours = `0${hours}`;
         }
      return `${hours}:00`;
  }

  function temperature(){
      let maxTemp = Math.round(props.data.main.temp_max);
      let minTemp = Math.round(props.data.main.temp_min);
      return `${maxTemp}°C | ${minTemp}°C`
  }

    return <div className="ForecastPreview col">
                
                        {hours()}
                    <br />
                        <WeatherIcons code={props.data.weather[0].icon}/>
                    <span>
                        {temperature()}
                    </span>
                    <div>
                        max | min
                    </div>
            </div>
}