import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import { createWeatherIcon } from "../../utils/weather.service";
import "./HomeCard.css";
const HomeCard = ({ data }) => {
  const src = createWeatherIcon(data.current.weather[0].icon).src;
  if (!data.current) return;
  return (
    <div className="lg-card-container">
      <p className="h2">Current weather:</p>
      <div className="home-card-header">
        <div>
          <img src={src} alt="" className="weather-icon-lg" />
        </div>
        <div className="header-data">
          <p className="home-card-temp">{data.current.temp.toFixed(0)} °C</p>
          <p className="weather-description header">
            {data.current.weather[0].description.toUpperCase()}
          </p>
          <p>Feels like: {data.current.feels_like}</p>
          <p>Humidity: {data.current.humidity}</p>
        </div>
      </div>
      <div className="sun-time header">
        <p>
          <LightModeIcon />{" "}
          {new Date(data.current.sunrise * 1000).toLocaleTimeString()}
        </p>
        <p>
          <WbTwilightIcon />{" "}
          {new Date(data.current.sunset * 1000).toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};

export default HomeCard;
