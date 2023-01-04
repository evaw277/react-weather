import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormatDate from "./FormatDate";

export default function Weather() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      city: response.data.city,
      temperature: response.data.temperature.current,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      imgUrl: response.data.condition.icon_url,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
    });
    console.log(response.data);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <FormatDate date={weatherData.date} />

        <form className="mb-3">
          <div className="row">
            <div className="col-9">
              <input
                type="text"
                placeholder="Change city"
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>

        <div className="row city-info">
          <div className="col-9">
            <h1>{weatherData.city}</h1>
            <h3>{Math.round(weatherData.temperature)} F°</h3>
          </div>
          <div className="col-3">
            <img src={weatherData.imgUrl} alt="icon" />
          </div>
          <ul>
            <li>{weatherData.description}</li>
            <li>Wind: {Math.round(weatherData.wind)} mph</li>
            <li>Humidity: {weatherData.humidity}%</li>
          </ul>
        </div>
      </div>
    );
  } else {
    const apiKey = `9b704611a331974toe74ff0bf9a527f0`;
    let city = "New York";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
