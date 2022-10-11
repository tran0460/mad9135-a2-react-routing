import React from "react";

const HourlyCard = ({ data }) => {
  console.log(data);
  if (!data) return;
  return (
    <div>
      <p>*********************</p>
      <p>Date: {new Date(data.dt * 1000).toLocaleDateString()}</p>
      <p>Time: {new Date(data.dt * 1000).toLocaleTimeString()}</p>
      <p></p>
      <p>Feels like: {data.feels_like.day}</p>
      <p></p>
    </div>
  );
};

export default HourlyCard;
