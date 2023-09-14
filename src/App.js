import React, { Component } from "react";
import fakeWeatherData from "./fakeWeatherData.json";
import "./App.css";
import { useState,useEffect } from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

// //will store data coming from api
// const [data, setData] = useState([])
// //will store search info


// //will handle input change from input
// }
// useEffect(() => {
  // //fetch data api goes here
  
  
  // }, [search])
  
  // const [search, setSearch] = useState("")
  // handleInputChange=(e)=>{
  //   setSearch(e.target.value)
  // }
  
  
  
  function App() {
    
    return (
      <div className="app">
      <Header />
      <Main />
      <Footer />
      </div>
    );
  }


export default App;
