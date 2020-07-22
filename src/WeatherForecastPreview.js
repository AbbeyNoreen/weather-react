import React from "react";
import ForecastWeatherIcon from "./ForecastWeatherIcon";

export default function WeatherForecastPreview(props) {
    return (
        <div className="col">
        <div className="upcoming">
          <h4 className="time">
            <strong> 
            {new Date(props.data.dt * 1000).getHours()}:00
            </strong>
          </h4>
          <div className="newIcon">
          <ForecastWeatherIcon code={props.data.weather[0].icon} />
            </div>
            <h4 className="temp">
              {Math.round(props.data.main.temp)} °F
              </h4>
              <h4 className="condition">
                  {props.data.weather[0].description}
            </h4>
      </div>
        </div>
    );
}