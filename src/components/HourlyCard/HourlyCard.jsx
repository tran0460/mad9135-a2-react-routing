import React from "react";
import { createWeatherIcon } from "../../utils/weather.service";

const HourlyCard = ({ data }) => {
  if (!data) return;
  const src = createWeatherIcon(data.weather[0].icon).src;
  return (
    <div>
      <p>*********************</p>
      <img src={src} alt="" />
      <h4>{data.weather[0].description}</h4>
      <p>Date: {new Date(data.dt * 1000).toLocaleDateString()}</p>
      <p>Time: {new Date(data.dt * 1000).toLocaleTimeString()}</p>
      <p>Feels like: {data.feels_like.day}</p>
      <p></p>
    </div>
  );
};

export default HourlyCard;
