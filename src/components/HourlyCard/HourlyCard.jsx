import React from "react";
import { createWeatherIcon } from "../../utils/weather.service";
import "./HourlyCard.css";

const HourlyCard = ({ data }) => {
  if (!data) return;
  const src = createWeatherIcon(data.weather[0].icon).src;
  const time = new Date(data.dt * 1000).toLocaleTimeString();

  return (
    <div className="sm-card-container hourly">
      <p>{new Date(data.dt * 1000).toLocaleDateString()}</p>
      <p>{time.split(":")[0] + " " + time.split(" ")[1]}</p>
      <img src={src} alt="" />
      <h4>{data.weather[0].description}</h4>
      <p>Feels like: {data.feels_like}</p>
      <p></p>
    </div>
  );
};

export default HourlyCard;
