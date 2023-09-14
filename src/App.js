import React, { Component } from "react";
import fakeWeatherData from "./fakeWeatherData.json";
import "./App.css";
import storm from "../src/img/weather-icons/storm.svg";
import cloudy from "../src/img/weather-icons/cloudy.svg";
import drizzle from "../src/img/weather-icons/drizzle.svg";
import fog from "../src/img/weather-icons/fog.svg";
import mostlycloudy from "../src/img/weather-icons/mostlycloudy.svg";
import partlycloudy from "../src/img/weather-icons/partlycloudy.svg";
import rain from "../src/img/weather-icons/rain.svg";
import snow from "../src/img/weather-icons/snow.svg";
import unknown from "../src/img/weather-icons/unknown.svg";
import clear from "../src/img/weather-icons/clear.svg";
import { useState,useEffect } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Karim"
    };
  }
  //will store data coming from api
  const [data, setData] = useState([])
  //will store search info
  const [search, setSearch] = useState("")


  //will handle input change from input
  handleInputChange=(e)=>{
    setSearch(e.target.value)

  }
  useEffect(() => {
  //fetch data api goes here
  
 
  }, [search])
  

 

  render() {
    return (
      <div className="app">
         <header>
          <input  className="city-input"  type="text" placeholder="Type in a City name"></input>
          <button type="button">FIND WEATHER</button>
         </header>
         <body className="main-section">
          <img className="image1"  src={mostlycloudy} alt="weather icon" />
          <h1>Overcast Clouds</h1>
          <div className="temperature">
          <h2>Temperature</h2>
          <h2>10º to 11º C</h2>
          </div>
        <div className="Humidity-pressure">
          <div className="Humidity">
          <h3> Humidity </h3>
          <h4> 78% </h4>
          </div>
          <div className="pressure">
           <h3> Pressure </h3>
           <h4> 1008.48 </h4>
          </div>
        </div>
         </body>
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
          <div className="temperature 1"> 8º C</div>
          <div className="temperature 2"> 9º C</div>
          <div className="temperature 3"> 14º C</div>
          <div className="temperature 4"> 17º C</div>
          <div className="temperature 5"> 18º C</div>
          <div className="temperature 6"> 16º C</div>
          <div className="temperature 7"> 13º C</div>
        </div>
      </footer>
      </div>
    );
  }
}

export default App;
