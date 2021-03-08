import React from "react";
import ReactAnimatedWeather from 'react-animated-weather';

export default function WeatherIcons(props){ 
    const codeMapping = {
        "01d": {icon: "CLEAR_DAY", color: "#F79954"},
        "01n": {icon: "CLEAR_NIGHT", color: "#63676A"},
        "02d": {icon: "PARTLY_CLOUDY_DAY", color: "#F79954"},
        "02n": {icon: "PARTLY_CLOUDY_NIGHT", color: "#63676A"},
        "03d": {icon: "CLOUDY", color: "#63676A"},
        "03n": {icon: "CLOUDY", color: "#63676A"},
        "04d": {icon: "PARTLY_CLOUDY_DAY", color: "#F79954"},
        "04n": {icon: "PARTLY_CLOUDY_NIGHT", color: "#63676A"},
        "09d": {icon: "RAIN", color: "#1777C5"},
        "09n": {icon: "RAIN", color: "#1777C5"},
        "10d": {icon: "RAIN", color: "#1777C5"},
        "10n": {icon: "RAIN", color: "#1777C5"},
        "11d": {icon: "RAIN", color: "#1777C5"},
        "11n": {icon: "RAIN", color: "#1777C5"},
        "13d": {icon: "SNOW", color: "#A8C2E3"},
        "13n": {icon: "SNOW", color: "#A8C2E3"},
        "50d": {icon: "FOG", color: "#D2D2D2"},
        "50n": {icon: "FOG", color: "#D2D2D2"}
    }
    return(
        <div>
            <ReactAnimatedWeather
                icon={codeMapping[props.code].icon}
                color={codeMapping[props.code].color}
                size={60}
                animate= {true}
            />
        </div>
    );
}