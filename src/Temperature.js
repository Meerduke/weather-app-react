import React from "react";
import "./Temperature.css";

export default function Temperature() {
  let temperature = {
    celsius: 20,
    fahrenheit: 68
  };
  return (
    <div className="row Temperature">
      <span className="units">
        <span>
          {temperature.celsius}
          <a className="celsius" href="/">
            °C
          </a>
        </span>
        <span> | </span>
        <span>
          {temperature.fahrenheit}
          <a className="fahrenheit" href="/">
            °F
          </a>
        </span>
      </span>
    </div>
  );
}
