import React from "react";
import { createWeatherIcon } from "../../utils/weather.service";
import "./DailyCard.css";

const DailyCard = ({ data }) => {
  const src = createWeatherIcon(data.weather[0].icon).src;
  const time = new Date(data.dt * 1000).toLocaleTimeString();
  return (
    <div className="sm-card-container">
      <p>{new Date(data.dt * 1000).toLocaleDateString()} </p>
      <p>{time.split(":")[0] + " " + time.split(" ")[1]}</p>
      <img src={src} alt="" />
      <h4>{data.weather[0].description}</h4>
      <p>Feels like {data.feels_like.day} during the day</p>
      <p>Feels like {data.feels_like.night} during the night</p>
    </div>
  );
};

export default DailyCard;
