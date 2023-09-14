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


const Main = (props) => {
  
  return (
    <div>
        <main className="main-section">
    <img className="image1"  src={mostlycloudy} alt="weather icon" />
    <h1>Overcast Clouds</h1>
    <div className="temperature">
    <h2>Temperature <span>{props.data.list[1].main.temp_min} °C to {props.data.list[1].main.temp_max} °C</span></h2>
    </div>
  <div className="Humidity-pressure">
    <div className="Humidity">
    <h2> Humidity  <span>{props.data.list[1].main.humidity}</span></h2>
    </div>
    <div className="pressure">
     <h3> Pressure <span>{props.data.list[1].main.pressure}</span></h3>
    </div>
  </div>
   </main>
   </div>
  )
}

export default Main