import React from 'react';
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

const Footer = (props) => {
  return (
    <div>
        <footer>
    <div className="times">
     <div className="time 1">03:00</div>
     <div className="time 2">06:00</div>
     <div className="time 3">09:00</div>
     <div className="time 4">12:00</div>
     <div className="time 5">15:00</div>
     <div className="time 6">18:00</div>
     <div className="time 7">21:00</div>
    </div>
    <div className="images">
     <img  className="image-icon 1"   src={mostlycloudy}   alt="" />
     <img  className="image-icon 2"   src={mostlycloudy}   alt="" />
     <img  className="image-icon 3"   src={clear}   alt="" />
     <img  className="image-icon 4"   src={clear}   alt="" />
     <img  className="image-icon 5"   src= {clear}  alt="" />
     <img  className="image-icon 6"   src= {clear}  alt="" />
     <img  className="image-icon 7"   src= {mostlycloudy}  alt="" />
   </div>
   <div className="temperatures">
     <div className="temperature 1"> {props.data.list[1].main.temp} °C</div>
     <div className="temperature 2"> {props.data.list[2].main.temp} °C</div>
     <div className="temperature 3"> {props.data.list[3].main.temp} °C</div>
     <div className="temperature 4"> {props.data.list[4].main.temp} °C</div>
     <div className="temperature 5"> {props.data.list[5].main.temp} °C</div>
     <div className="temperature 6"> {props.data.list[6].main.temp} °C</div>
     <div className="temperature 7"> {props.data.list[7].main.temp} °C</div>
   </div>
 </footer>
 </div>
  )
}

export default Footer

