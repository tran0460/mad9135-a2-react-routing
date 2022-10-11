import React from "react";
import { createWeatherIcon } from "../../utils/weather.service";

const DailyCard = ({ data }) => {
  const src = createWeatherIcon(data.weather[0].icon).src;
  return (
    <div>
      <p>*********************</p>
      <img src={src} alt="" />
      <h4>{data.weather[0].description}</h4>
      <p>Date: {new Date(data.dt * 1000).toLocaleDateString()}</p>
      <p>Time: {new Date(data.dt * 1000).toLocaleTimeString()}</p>
      <p>Feels like {data.feels_like.day} during the day</p>
      <p>Feels like {data.feels_like.night} during the night</p>
      <p></p>
    </div>
  );
};

export default DailyCard;