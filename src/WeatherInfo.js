import React from "react";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";
import WeatherForecast from "./WeatherForecast";
import Weather from "./Weather";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="row city-info">
        <div className="col-9">
          <h1>{props.data.city}</h1>
          <WeatherTemperature fahrenheit={props.data.temperature} />
        </div>
        <div className="col-3">
          <img src={props.data.imgUrl} alt="icon" />
        </div>
        <ul>
          <li>{props.data.description}</li>
          <li>Wind: {Math.round(props.data.wind)} mph</li>
          <li>Humidity: {props.data.humidity}%</li>
        </ul>
      </div>
    </div>
  );
}
