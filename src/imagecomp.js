import React from 'react';
import myImage from '../src/img/weather-icons/snow.svg'; // Replace with the actual path to your image file

function App() {
  return (
    <div>
      <h1>My React App</h1>
      <img src={myImage} alt="My Image" />
    </div>
  );
}

export default App;
