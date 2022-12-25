import React from "react";

import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    temperature: 19,
    date: "Tuesday 10:00",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
  };

  return (
    <div className="Weather">
      <h1 className="date">{weatherData.date}</h1>

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
        <div className="col-6">
          <h2>
            {weatherData.city} {weatherData.temperature} C°
          </h2>
        </div>
        <div className="col-6">
          <img src={weatherData.imgUrl} alt="icon" />
        </div>
        <ul>
          <li>{weatherData.description}</li>
          <li>{weatherData.wind} mph</li>
          <li>{weatherData.humidity}%</li>
        </ul>
      </div>
    </div>
  );
}
