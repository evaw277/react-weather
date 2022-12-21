import React from "react";
import axios from "axios";

export default function Weather() {
  function handleResponse(response) {
    alert(`The weather in New York is ${response.data.main.temp}`);
  }
  let url = `https://api.openweathermap.org/data/2.5/weather?q=new%20york&appid=a5dcf72a868ff3572b4a1a8358099667&units=metric`;

  axios.get(url).then(handleResponse);
  return <h1>hi from weather</h1>;
}
