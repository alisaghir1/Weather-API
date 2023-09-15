//--------------Imports--------------------------------

import React, { Component } from "react";//to use components in react
import fakeWeatherData from "./fakeWeatherData.json";//to access the fakeWeatherData json file
import "./App.css";//to import css style
import { useState,useEffect } from "react";//to use state
import Header from "./components/Header";//to include the header element
import Main from "./components/Main";//to include the main element
import Footer from "./components/Footer";//to include the footer element



//-------------App functions--------------------------------

function App() {
  //prepare data for Weather API call
    const [weatherData, setWeatherData] = useState()//set weather data
    const [loading, setLoading] = useState(false);//set loading

    //function to get city from text field
    const searchForWeather = (searchInput) => {
      setLoading(true);//load weather data
  //declare real Weather API using the default key , ${searchInput} will be replaced by the city name
    const api=`http://api.openweathermap.org/data/2.5/forecast?q=${searchInput}&cnt=8&units=metric&appid=a1f8856e65db5836315348ad6f01cc41`
    
  //fetch the declared Weather API and handle the error through if condition res not ok throw error if not return res.json
    fetch(api)
    .then((res) => {
      if (!res.ok) {
        throw new Error("Please Enter a valid city name");
      }
      return res.json();
    })
    .then((data) => {
      console.log({ data });
      setWeatherData(data);
      setLoading(false);
    })
    .catch((err) => {
      alert(err);
      setLoading(false);
    });
    }
    // we created here in the function the loading set loading to prevent an error from happening through fetching data
    return (
      <div className="app">

      <Header searchForWeather={searchForWeather} />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {weatherData && <Main data={weatherData} />}
          {weatherData && <Footer data={weatherData} />}
        </>
      )}
      </div>
    );
  }


export default App;
