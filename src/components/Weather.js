import React, { useEffect } from "react";
import axios from "axios";

function Weather() {
  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=Boston&appid=d018148642d233fed0759f06ec72279a`
      )
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  }, []);
  return <div>This is the weather</div>;
}

export default Weather;
