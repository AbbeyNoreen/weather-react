import React from "react"
import axios from "axios"

export default function Form(props) {
    function handleResponse(response) {
        alert(`The weather in ${response.data.name} is ${Math.round(response.data.main.temp)}°F`);
    }

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=ee003aab68bcab21af649210b2a07f93&units=imperial`;
axios.get(apiUrl).then(handleResponse);

 return (
    <h2>
    Form Page
     </h2> 
 );
}