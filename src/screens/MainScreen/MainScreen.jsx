import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";
import Searchbar from "../../components/Searchbar/Searchbar";
import { getGeolocation } from "../../utils/map.service";
import { getForecast } from "../../utils/weather.service";
import "./MainScreen.css";

const MainScreen = () => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState({});
  const [weatherData, setWeatherData] = useState({});
  const handleSearch = async () => {
    const respObj = await getGeolocation(query);
    setLocation(respObj);
  };

  const getWeatherData = async () => {
    const respObj = await getForecast({
      coord: {
        lat: location.lat,
        lon: location.lon,
      },
      units: "metric",
    });
    setWeatherData(respObj);
  };
  useEffect(() => {
    if (!location.lat || !location.lon) return;
    getWeatherData();
  }, [location]);
  useEffect(() => {
    console.log(weatherData);
  }, [weatherData]);
  return (
    <div>
      <Navbar />
      <div className="container main-container">
        <Searchbar
          query={query}
          setQuery={setQuery}
          onSearch={() => handleSearch()}
        />
        <Outlet />
      </div>
    </div>
  );
};

export default MainScreen;
