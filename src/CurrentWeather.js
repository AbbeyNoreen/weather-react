import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  let currentWeather = {
    city: "Janesville",
    temperature: 91,
    description: "Mostly Cloudy",
    date: "Thur | Jun 18 | 22:55",
    humidity: 33,
    wind: 8,
    image: (
      <img
        src="http://openweathermap.org/img/wn/03n@2x.png"
        alt=""
        id="current-icon"
      />
    )
  };

  return (
    <div className="row">
      <div className="col-6">
        <div className="currentWeather">{currentWeather.image}</div>
      </div>
      <div className="col-6">
        <h1 id="city">{currentWeather.city}</h1>
        <h3>
          <div class="currentTemperature">
            <span id="temp-value"> {currentWeather.temperature} </span>
            <a href="/" class="farUnit">
              °F
            </a>{" "}
            |
            <a href="/" class="celUnit">
              {" "}
              °C
            </a>
            <br />
          </div>
          <span id="description">{currentWeather.description}</span>
          <br />
          <div id="current-date-time">{currentWeather.date}</div>
        </h3>
        <h4>
          <em>
            Humidity: <span id="humidity" />
            {currentWeather.humidity}%
            <br />
            Wind: <span id="wind" />
            {currentWeather.wind}mph
          </em>
        </h4>
      </div>
    </div>
  );
}
