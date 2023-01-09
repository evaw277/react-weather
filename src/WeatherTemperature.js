import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("fahrenheit");
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function convertToCelsius() {
    return 5 / 9(props.fahrenheit) - 32;
  }

  if (unit === "fahrenheit") {
    return (
      <div>
        <span className="temperature">{Math.round(props.fahrenheit)} </span>
        <span>
          F° |{" "}
          <a href="/" onClick={showCelsius}>
            C°
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div>
        <span className="temperature">{Math.round(convertToCelsius())}</span>
        <span>
          <a href="/" onClick={showFahrenheit}>
            F°
          </a>
          {""}| C°
        </span>
      </div>
    );
  }
}
