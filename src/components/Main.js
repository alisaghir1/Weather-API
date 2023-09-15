
//--------------imports--------------------------------

import React from "react";
import mostlycloudy from "../img/weather-icons/mostlycloudy.svg";
import clear from "../img/weather-icons/clear.svg";
import partlycloudy from "..//img/weather-icons/partlycloudy.svg";
import rain from "..//img/weather-icons/rain.svg";
import snow from "..//img/weather-icons/snow.svg";
import unknown from "..//img/weather-icons/unknown.svg";
import storm from "..//img/weather-icons/storm.svg";
import cloudy from "..//img/weather-icons/cloudy.svg";
import drizzle from "..//img/weather-icons/drizzle.svg";
import fog from "..//img/weather-icons/fog.svg";

//---------------function using react props --------------------------------
const Main = (props) => {
  //conditional function to assign icon relative to weather description
  const getIcon = weatherName =>{
    switch(weatherName){
      case "Mostly Cloudy":
        return mostlycloudy;
      case "Clear":
        return clear;
      case "Partly Cloudy":
        return partlycloudy;
      case "Rain":
        return rain;
      case "Snow":
        return snow;
      case "Unknown":
        return unknown;
      case "Storm":
        return storm;
      case "Clouds":
        return cloudy;
      case "Drizzle":
        return drizzle;
      case "Fog":
        return fog;
      default:
        return unknown;
    }
  }
  return (
    //Main html elements of the webpage
    <div>
        <main className="main-section">
    <img className="image1"  src={getIcon(props.data.list[0].weather[0].main)} alt="" />
    <h1>{props.data.list[0].weather[0].description}</h1>
    <div className="temperature">
    <h2>Temperature <span>{props.data.list[0].main.temp_min} °C to {props.data.list[0].main.temp_max} °C</span></h2>
    </div>
  <div className="Humidity-pressure">
    <div className="Humidity">
    <h2> Humidity  <span>{props.data.list[0].main.humidity}%</span></h2>
    </div>
    <div className="pressure">
     <h3> Pressure <span>{props.data.list[0].main.pressure}</span></h3>
    </div>
  </div>
   </main>
   </div>
  )
}

export default Main