
//---------------imports--------------------------------
import React from 'react'
import { useState } from "react";

//----------------functions using react Props ----------------
const Header = (props) => {
  const [search, setSearch] = useState("")//useState hook to search for city name

  //function when button is clicked set search for search
  const handleBtnClick = () => {
    props.searchForWeather(search)
  }
  return (
    //header structure
<div>
  <header>
    <input onChange={e=>setSearch(e.target.value)}  className="city-input"  type="text" placeholder="Type in a City name"></input>
    <button type="button" onClick={handleBtnClick}>FIND WEATHER</button>
  </header>

</div>
  )
}

export default Header
