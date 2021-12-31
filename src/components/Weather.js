import React, { useEffect, useState } from "react";
import axios from "axios";
import DetailCard from "./DetailCard";
import "./Weather.css";

function Weather() {
  const [userinput, setUserinput] = useState("");
  const [city, setCity] = useState("");

  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d018148642d233fed0759f06ec72279a`
      )
      .then((response) => {
        const data = response.data;
        setList((olddata) => [...olddata, data]);
      })
      .catch((error) => console.log(error));
  }, [city]);

  return (
    <div>
      <input
        placeholder="search..."
        onChange={(e) => setUserinput(e.target.value)}
        value={userinput}
      />
      <button
        onClick={() => {
          setCity(userinput);
          setUserinput("");
        }}
      >
        Seach
      </button>
      {list.length > 0 && (
        <div className="myGridDisplay">
          {list.map((item) => {
            console.log(item);
            return <DetailCard cityInfo={item} />;
          })}
        </div>
      )}
    </div>
  );
}

export default Weather;
