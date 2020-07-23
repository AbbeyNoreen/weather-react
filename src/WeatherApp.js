import React from "react";
import "./WeatherApp.css";
import CurrentWeather from "./CurrentWeather";

export default function WeatherApp() {
  return (
    <div className="container">
      <div className="weather-app">
        <CurrentWeather defaultCity="Madison" />
      </div>
      <footer>
      <p>
        <a href="https://github.com/AbbeyNoreen" target="_blank" rel="noopener noreferrer">Open-source code </a>
        by <a href="https://linkedin.com/in/abbeynoreen" target="_blank" rel="noopener noreferrer">Abbey Noreen</a> + hosted on <a href="https://quirky-noyce-b9c45a.netlify.app/" target="_blank" rel="noopener noreferrer"> Netlify</a> 
      </p> 
    </footer>
    </div>
  );
}
