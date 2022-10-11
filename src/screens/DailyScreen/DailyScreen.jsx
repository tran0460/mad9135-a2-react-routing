import React from "react";
import { useOutletContext } from "react-router-dom";
import HourlyCard from "../../components/HourlyCard/HourlyCard";

const DailyScreen = () => {
  const [data] = useOutletContext();
  if (!data.daily) return;
  return (
    <div>
      {data.daily.map((data) => (
        <HourlyCard data={data} />
      ))}
    </div>
  );
};

export default DailyScreen;
