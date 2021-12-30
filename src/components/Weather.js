import React, { useEffect, useState } from "react";
import axios from "axios";
import DetailCard from "./DetailCard";

function Weather() {
  const [userinput, setUserinput] = useState("");
  const [city, setCity] = useState("");
  const [currentWeather, setcurrentWeather] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d018148642d233fed0759f06ec72279a`
      )
      .then((response) => {
        setcurrentWeather(response.data);
      })
      .catch((error) => console.log(error));
  }, [city]);

  return (
    <div>
      <input
        placeholder="search..."
        onChange={(e) => setUserinput(e.target.value)}
      />
      <button onClick={() => setCity(userinput)}>Seach</button>
      {currentWeather !== null && <DetailCard cityInfo={currentWeather} />}
    </div>
  );
}

export default Weather;
