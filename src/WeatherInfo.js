import React from "react";
import FormatDate from "./FormatDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemp from "./WeatherTemp";

export default function WeatherInfo(props) {
    return (
    <div className="row">
    <div className="col-6">
      <div className="currentWeather">
        <WeatherIcon code={props.data.iconUrl} />
        </div>
        
    </div>
    <div className="col-6">
      <h1 id="city">{props.data.city}</h1>
      <h3>
        <div className="currentTemperature">
          <WeatherTemp fahrenheit={props.data.temperature} />
          <br />
        </div>
        <span className="description">{props.data.description}</span>
        <br />
        <div className="current-date-time">
          <FormatDate date={props.data.date} />
        </div>
      </h3>
      <h4>
        <em>
          Humidity: <span id="humidity" />
          {props.data.humidity}%
          <br />
          Wind: <span id="wind" />
          {props.data.wind} mph
        </em>
      </h4>
    </div>
  </div> 
    );
}