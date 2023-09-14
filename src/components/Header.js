import React from 'react'

const Header = () => {
  return (
<div>
  <header>
    <input  className="city-input"  type="text" placeholder="Type in a City name"></input>
    <button type="button">FIND WEATHER</button>
  </header>
</div>
  )
}

export default Header