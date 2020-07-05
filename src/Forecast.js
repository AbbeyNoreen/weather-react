import React from "react";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="row">
      <div className="col">
        <div className="upcoming">
          <h4 className="time">
            <strong>1:00</strong>
          </h4>
          <div className="upcomingIcon">
            <img src="http://openweathermap.org/img/wn/10n@2x.png" alt="" />
            <h4 className="tempCondition">
              83 °F <br />
              Rainy
            </h4>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="upcoming">
          <h4 className="time">
            <strong>4:00</strong>
          </h4>
          <div className="upcomingIcon">
            <img src="http://openweathermap.org/img/wn/02n@2x.png" alt="" />
            <h4 className="tempCondition">
              81 °F <br />
              Cloudy
            </h4>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="upcoming">
          <h4 className="time">
            <strong>7:00</strong>
          </h4>
          <div className="upcomingIcon">
            <img src="http://openweathermap.org/img/wn/11n@2x.png" alt="" />
            <h4 className="tempCondition">
              81 °F <br />
              Stormy
            </h4>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="upcoming">
          <h4 className="time">
            <strong>10:00</strong>
          </h4>
          <div className="upcomingIcon">
            <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" />
            <h4 className="tempCondition">
              85 °F <br />
              Sunny
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}