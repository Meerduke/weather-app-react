import React,{ useState } from "react";

export default function TemperatureConversion(props){
  const [unit, setUnit] = useState("celsius");

  function showCelsius(event){
      event.preventDefault();
      setUnit("celsius");
  }

  function showFahrenheit(event){
      event.preventDefault();
      setUnit("fahrenheit");
  }

  if (unit === 'celsius'){
    return(
    <div className="row Temperature">
      <span>
        <span>
          {Math.round(props.celsius)}
        </span>
          <span className="units">
           {""} <a className="celsius active" href="/">
            °C
          </a>
          {""} | {""}
          <a className="fahrenheit" href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>  
      </span>
    </div>
    );
} else {
  let fahrenheit = (props.celsius * 5 / 9) + 32
  return(
    <div className="row Temperature">
      <span>
        <span>
          {Math.round(fahrenheit)}
        </span>
          <span className="units">
           {""} <a className="celsius" href="/" onClick={showCelsius}>
            °C
          </a>
          {""} | {""}
          <a className="fahrenheit" href="/">
            °F
          </a>
        </span>  
      </span>
    </div>

  );
}
}