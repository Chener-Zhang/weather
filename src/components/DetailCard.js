import React from "react";

function DetailCard({ cityInfo }) {
  console.log(cityInfo);

  const celsius = parseFloat(cityInfo.main.temp - 273.15).toFixed(2);

  return (
    <>
      <h2>{cityInfo.name}</h2>
      <h2>Temp : {celsius} ℃</h2>
      <h2>{cityInfo.weather[0].description}</h2>
      <img
        src={`http://openweathermap.org/img/wn/${cityInfo.weather[0].icon}@2x.png`}
        alt={cityInfo.id}
      />
    </>
  );
}

export default DetailCard;
