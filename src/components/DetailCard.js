import React from "react";

function DetailCard({ cityInfo }) {
  console.log(cityInfo);
  return (
    <>
      <h2>{cityInfo.name}</h2>
      <h2>Temp : {cityInfo.main.temp}</h2>
    </>
  );
}

export default DetailCard;
