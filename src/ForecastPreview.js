import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcons from "./WeatherIcons";

export default function ForecastPreview(props){

  function temperature(){
      let maxTemp = Math.round(props.data.temp.max);
      let minTemp = Math.round(props.data.temp.min);
      return `${maxTemp}°C | ${minTemp}°C`
  }

    return <div className="ForecastPreview col">
                        <FormattedDate date={new Date(props.data.dt*1000)} forecast={true}/>
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