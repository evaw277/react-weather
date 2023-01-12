import React from "react";

export default function WeatherForecast() {
  return (
    <div className="forecast">
      <div className="row">
        <div className="col">
          <div className="forecast-day">Thu</div>
          <div>
            <img src="/" className="forcast-img" alt="cloud"></img>
          </div>
          <span className="forecast-temp-high">19</span>
          <span className="forecast-temp-low">10</span>
        </div>
      </div>
    </div>
  );
}
