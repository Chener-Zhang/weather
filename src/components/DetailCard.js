import React from "react";
import "./DetailCard.css";
function DetailCard({ cityInfo }) {
  console.log(cityInfo);

  const celsius = parseFloat(cityInfo.main.temp - 273.15).toFixed(2);

  return (
    <div className="container">
      <h3>{cityInfo.name}</h3>
      <h1>{celsius} ℃</h1>
      <img
        src={`http://openweathermap.org/img/wn/${cityInfo.weather[0].icon}@2x.png`}
        alt={cityInfo.id}
      />
      <h3>{cityInfo.weather[0].description}</h3>
    </div>
  );
}

export default DetailCard;
