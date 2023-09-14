import React, { Component } from "react";
import fakeWeatherData from "./fakeWeatherData.json";
import "./App.css";
import { useState,useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import FakeWeatherData from "./fakeWeatherData.json";
  
  
  
  function App() {
    const [data, setData] = useState(null);
    return (
      <div className="app">
      <Header />
      <Main data={fakeWeatherData}/>
      <Footer data={fakeWeatherData}/>
      </div>
    );
  }


export default App;
