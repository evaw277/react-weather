import React from "react";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <div className="row city-info">
        <h1>{props.data.city}</h1>

        <div className="col">
          {" "}
          <div className="main-temperature">
            {Math.round(props.data.temperature)} F°
          </div>
        </div>
        <div className="col">
          <img src={props.data.imgUrl} alt="icon" />
        </div>
        <div className="col">
          <ul>
            <li>{props.data.description}</li>
            <li>Wind: {Math.round(props.data.wind)} mph</li>
            <li>Humidity: {props.data.humidity}%</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
