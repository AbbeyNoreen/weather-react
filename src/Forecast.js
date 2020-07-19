import React, {useState} from "react";
import axios from "axios";
import "./Forecast.css";
import WeatherForecastPreview from "./WeatherForecastPreview"

export default function Forecast(props) {
const [loaded, setLoaded] = useState(false);
const [forecast, setForecast] = useState(null);

function handleForecastResponse(response) {
  setForecast(response.data);
  setLoaded(true);
}

if(loaded && props.city === forecast.city.name) {
  return (
    <div className="row">
        <WeatherForecastPreview data={forecast.list[0]} />
        <WeatherForecastPreview data={forecast.list[1]} />
        <WeatherForecastPreview data={forecast.list[2]} />
        <WeatherForecastPreview data={forecast.list[3]} />
    </div>
  );
} else {
  let apiKey = "ee003aab68bcab21af649210b2a07f93"
  let url = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=imperial`;
  axios.get(url).then(handleForecastResponse);
  return null;
}
}