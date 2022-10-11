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
  const [weatherData, setWeatherData] = useState();
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
    const history = JSON.parse(localStorage.getItem("history"));
    if (!history) localStorage.setItem("history", JSON.stringify([]));
    const newHistory = history ? history : [];
    if (newHistory.length >= 3) newHistory.pop();
    if (!newHistory.includes(respObj.timezone.split("/")[1]))
      newHistory.unshift(respObj.timezone.split("/")[1]);
    setWeatherData(respObj);
    localStorage.setItem("history", JSON.stringify(newHistory));
  };

  useEffect(() => {
    if (!location.lat || !location.lon) return;
    getWeatherData();
  }, [location]);
  return (
    <div>
      <Navbar />
      <div className="container main-container">
        <Searchbar
          query={query}
          setQuery={setQuery}
          onSearch={() => handleSearch()}
        />
        {weatherData ? (
          <Outlet context={[weatherData]} />
        ) : (
          <>
            <h2>Welcome</h2>
            <p>Type in a city / country to see the weather</p>
          </>
        )}
      </div>
    </div>
  );
};

export default MainScreen;
