import React from "react";
import HomeCard from "../../components/HomeCard/HomeCard";
import { useOutletContext } from "react-router-dom";

const HomeScreen = () => {
  const [data] = useOutletContext();
  return (
    <div>
      <HomeCard data={data} />
    </div>
  );
};

export default HomeScreen;
