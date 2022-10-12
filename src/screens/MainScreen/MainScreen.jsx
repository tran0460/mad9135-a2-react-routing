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
  const handleSearch = async (customQuery) => {
    const respObj = await getGeolocation(customQuery ? customQuery : query);
    setLocation(respObj);
    setQuery("");
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
    if (location.city) {
      if (!history) localStorage.setItem("history", JSON.stringify([]));
      const newHistory = history ? history : [];
      if (newHistory.length >= 3) newHistory.pop();
      if (!newHistory.includes(location.city.split(" ")[0].replace(",", "")))
        newHistory.unshift(location.city.split(" ")[0].replace(",", ""));
      localStorage.setItem("history", JSON.stringify(newHistory));
    }
    setWeatherData(respObj);
  };

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((res) => {
        setLocation({ lat: res.coords.latitude, lon: res.coords.longitude });
      });
    }
  }, []);
  useEffect(() => {
    if (!location.lat || !location.lon) return;
    getWeatherData();
  }, [location]);
  return (
    <div>
      <Navbar handleSearch={handleSearch} />
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
