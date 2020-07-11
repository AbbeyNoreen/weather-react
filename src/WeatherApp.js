import React from "react";
import "./WeatherApp.css";

import Footer from "./Footer";
import Forecast from "./Forecast";
import CurrentWeather from "./CurrentWeather";
import Search from "./Search";

export default function WeatherApp() {
  return (
    <div className="container">
      <div className="weather-app">
        <Search />
        <hr />
        <CurrentWeather defaultCity="Madison" />
        <hr />
        <Forecast />
      </div>
      <Footer />
    </div>
  );
}
