import React,{ useState } from "react";

export default function TemperatureConversion(props){
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event){
      event.preventDefault();
      setUnit("fahrenheit");
  }

  function showCelsius(event){
      event.preventDefault();
      setUnit("celsius");
  }

  function fahrenheit(){
    return (props.celsius * 9) / 5 + 32;
  }

  if (unit === "celsius"){
    return(
    <div className="row Temperature">
      <span>
        <span>
          {Math.round(props.celsius)}
        </span>
          <span className="units">
           {""} <span className="celsius" href="/">
            °C
          </span>
          {""} | {""}
          <a className="fahrenheit" href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>  
      </span>
    </div>
    );
} else {
  return(
    <div className="row Temperature">
      <span>
        <span>
          {Math.round(fahrenheit())}
        </span>
          <span className="units">
           {""} <a className="celsius" href="/" onClick={showCelsius}>
            °C
          </a>
          {""} | {""}
          <span className="fahrenheit" href="/">
            °F
          </span>
        </span>  
      </span>
    </div>

  );
}
}