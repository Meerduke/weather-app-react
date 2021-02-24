import React from "react";
import axios from "axios";
import Loader from "react-loader-spinner";

export default function Weather(props){

    function showTemperature(response){
        alert(response.data.main.temp);
    }

    function getCity(event){
        event.preventDefault();
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=aae79086babd8e5274d8186968279eae&units=metric`;
        axios.get(apiUrl).then(showTemperature);

    }
    
    return (
        <div>
        <button onClick={getCity}>
            Weather Search
        </button>
        <Loader
        type="Puff"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
      </div>
    )
}