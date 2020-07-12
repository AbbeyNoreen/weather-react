import React from "react";
import "./WeatherApp.css";

import Footer from "./Footer";
import Forecast from "./Forecast";
import CurrentWeather from "./CurrentWeather";

export default function WeatherApp() {
  return (
    <div className="container">
      <div className="weather-app">
      
        <CurrentWeather defaultCity="Madison" />
        <hr />
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}
