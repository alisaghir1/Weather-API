import React from "react";

import clear from "../img/weather-icons/clear.svg";
import "./Search.css";
class Search extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <div>
        <header>
        {this.state.input}
        <input
          type="text"
          id="input-name"
          placeholder="Type in a City name"
          onChange={event => {
            this.setState({ input: event.target.value });
          }}
        />
        <button
          onClick={event => {
            this.props.handleInput(this.state.input);
          }}
        >
          FIND WEATHER
        </button>
        </header>
      </div>
    );
  }
}
export default Search;

 
