import React, {useState} from "react";
import axios from "axios";
import "./Forecast.css";

export default function Forecast() {
  const [temperature, setTemperature] = useState(null);
  const [description, setDescription] = useState(null);
 
function handleResponse(response) {
  setTemperature(Math.round(response.data.main.temp));
  setDescription(response.data.weather[0].description);
}

  const apiKey = "ee003aab68bcab21af649210b2a07f93"
  let city = "Madison"
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(handleResponse);


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
              {temperature} °F <br />
              {description}
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
            {temperature} °F <br />
              {description}
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
            {temperature} °F <br />
              {description}
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
            {temperature} °F <br />
              {description}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}