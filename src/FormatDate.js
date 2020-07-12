import React from "react";

export default function formatDate(props) {
let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
let day = days[props.date.getDay()];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let month = months[props.date.getMonth()];
let date = props.date.getDate();
let hours = props.date.getHours();
let minutes = props.date.getMinutes();
if (minutes < 10) {
    minutes = `0${minutes}`;
}
return (
    <div>
{day} | {month} {date} | {hours}:{minutes}
    </div>
);
}