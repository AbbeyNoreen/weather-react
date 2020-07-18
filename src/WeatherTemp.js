import React, {useState} from "react";

export default function WeatherTemp(props) {
    const [unit, setUnit] = useState("fahrenheit");

function convertToCelsius(event) {
event.preventDefault();
setUnit("celsius");
    }
    function convertToFahrenheit(event) {
        event.preventDefault();
        setUnit("fahrenheit");
    }

    if (unit === "fahrenheit") {
        return (
            <div>
        <span id="temp-value"> {props.fahrenheit} </span>
        <a href="/" className="farUnit">
          °F
        </a>{" "}
        | 
        <a href="/" className="celUnit" onClick={convertToCelsius} >
          {" "}
          °C
        </a>
        </div>
        );
    } else {
        let celsius = (props.fahrenheit) - 32 * 5/9;
        return (
            <div>
        <span id="temp-value"> {Math.round(celsius)} </span>
        <a href="/" className="farUnit" onClick={convertToFahrenheit} >
          °F
        </a>{" "}
        | 
        <a href="/" className="celUnit">
          {" "}
          °C
        </a>
        </div>
        );
    }

}

