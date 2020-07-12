import React, {useState} from "react";
import axios from "axios";
import FormatDate from "./FormatDate";
import "./CurrentWeather.css";

export default function CurrentWeather(props) {
  const [ready, setReady] = useState(false);
  const [currentWeather, setCurrentWeather] = useState({});

function handleResponse(response) {
  setReady(true);
  setCurrentWeather({
    city: response.data.name,
    temperature: Math.round(response.data.main.temp),
    description: response.data.weather[0].description,
    date: new Date(response.data.dt * 1000),
    humidity: response.data.main.humidity,
    wind: Math.round(response.data.wind.speed),
    image: (
      <img
        src="http://openweathermap.org/img/wn/03n@2x.png"
        alt= {currentWeather.description}
        id="current-icon"
      />
    )});
}

if (ready) {
  return (
    <div className="row">
      <div className="col-6">
        <div className="currentWeather">{currentWeather.image}</div>
      </div>
      <div className="col-6">
        <h1 id="city">{currentWeather.city}</h1>
        <h3>
          <div className="currentTemperature">
            <span id="temp-value"> {currentWeather.temperature} </span>
            <a href="/" className="farUnit">
              °F
            </a>{" "}
            |
            <a href="/" className="celUnit">
              {" "}
              °C
            </a>
            <br />
          </div>
          <span className="description">{currentWeather.description}</span>
          <br />
          <div className="current-date-time">
            <FormatDate date={currentWeather.date} />
          </div>
        </h3>
        <h4>
          <em>
            Humidity: <span id="humidity" />
            {currentWeather.humidity}%
            <br />
            Wind: <span id="wind" />
            {currentWeather.wind} mph
          </em>
        </h4>
      </div>
    </div>
  );
} else {
  const apiKey = "ee003aab68bcab21af649210b2a07f93"
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);

  return "Loading Your Weather ...";
}
}

