import React, {useState} from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
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
    image: 
      <img
        src="http://openweathermap.org/img/wn/03n@2x.png"
        alt= {currentWeather.description}
        id="current-icon"
      />
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
      <div className="row">
        <div className="col-6" id="current-button">
          <input type="button" value="Current" className="button" />
        </div>
        <div className="col-6" id="search-button">
          <input type="submit" value="Search" className="button" />
        </div>
      </div>
    </form>
    <hr />
<WeatherInfo data={currentWeather} />
</div>
  );
} else {
  search();
  return "Loading Your Weather ...";
}
}

