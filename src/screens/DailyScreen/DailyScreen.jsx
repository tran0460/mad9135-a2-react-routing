import React from "react";
import { useOutletContext } from "react-router-dom";
import DailyCard from "../../components/DailyCard/DailyCard";

const DailyScreen = () => {
  const [data] = useOutletContext();
  if (!data.daily) return;
  return (
    <div>
      {data.daily.map((data, index) => {
        if (index >= 6) return;
        return <DailyCard data={data} />;
      })}
    </div>
  );
};

export default DailyScreen;
