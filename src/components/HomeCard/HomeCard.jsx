import React from "react";

const HomeCard = ({ data }) => {
  if (!data.current) return;
  return (
    <div>
      <p>Weather: {data.current.weather[0].description}</p>
      <p>Temp: {data.current.temp}</p>
      <p>Humidity: {data.current.humidity}</p>
      <p>Feels like: {data.current.feels_like}</p>
      <p>
        Sunrise: {new Date(data.current.sunrise * 1000).toLocaleTimeString()}
      </p>
      <p>Sunset: {new Date(data.current.sunset * 1000).toLocaleTimeString()}</p>
    </div>
  );
};

export default HomeCard;
