import React from "react";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temperature.maximum);
    return `${temperature}`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temperature.minimum);
    return `${temperature}`;
  }
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="forecast-day">{day()}</div>
      <div>
        <img
          src={props.data.condition.icon_url}
          className="forcast-img"
          alt={props.data.condition.icon}
        ></img>
      </div>
      <span className="forecast-temp-high">{maxTemperature()}°</span>
      <span className="forecast-temp-low">{minTemperature()}°</span>
    </div>
  );
}
