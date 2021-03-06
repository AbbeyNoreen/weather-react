import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import "./CurrentWeather.css";


export default function CurrentWeather(props) {
  const [currentWeather, setCurrentWeather] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
function handleResponse(response) {
  setCurrentWeather({
    ready: true,
    city: response.data.name,
    temperature: Math.round(response.data.main.temp),
    description: response.data.weather[0].description,
    date: new Date(response.data.dt * 1000),
    humidity: response.data.main.humidity,
    wind: Math.round(response.data.wind.speed),
    iconUrl: response.data.weather[0].icon,
    });
}

function search() {
  const apiKey = "ee003aab68bcab21af649210b2a07f93"
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
  event.preventDefault();
  search();
}
function handleChangeCity(event) {
setCity(event.target.value);
}

if (currentWeather.ready) {
  return (
    <div className="search-form">
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Enter City Here"
        autoComplete="off"
        autoFocus="on"
        id="city-form"
        onChange={handleChangeCity}
      />
        <div id="search-button">
          <input type="submit" value="Search" className="button" />
        </div>
    </form>
    <hr />
<WeatherInfo data={currentWeather} />
<hr />
<Forecast city={currentWeather.city} />
</div>
  );
} else {
  search();
  return "Loading Your Weather ...";
}
}

