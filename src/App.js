import "./App.css";
import { Routes, Route } from "react-router-dom";
import MainScreen from "./screens/MainScreen/MainScreen";
import HomeScreen from "./screens/HomeScreen/HomeScreen";
import HourlyScreen from "./screens/HourlyScreen/HourlyScreen";
import DailyScreen from "./screens/DailyScreen/DailyScreen";
import ErrorScreen from "./screens/ErrorScreen/ErrorScreen";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainScreen />}>
          <Route index element={<HomeScreen />} />
          <Route path="home" element={<HomeScreen />} />
          <Route path="hourly" element={<HourlyScreen />} />
          <Route path="daily" element={<DailyScreen />} />
          <Route path="*" element={<ErrorScreen />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
