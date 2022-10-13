import React from "react";
import { useOutletContext } from "react-router-dom";
import HourlyCard from "../../components/HourlyCard/HourlyCard";

const HourlyScreen = () => {
  const [data] = useOutletContext();
  if (!data.daily) return;
  return (
    <div className="screen-container hourly">
      {data.hourly.map((data, index) => {
        if (index >= 6) return;
        return <HourlyCard data={data} />;
      })}
    </div>
  );
};

export default HourlyScreen;
