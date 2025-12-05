import { useState } from "react";
import InfoBox from "./InfoBox";
import SearchBox from "./SearchBox";

export default function WeartherApp() {
  const [weatherData, setWeatherData] = useState({
    city: "New york",
    temp: 25,
    temp_min: 20,
    temp_max: 30,
    weather: "sunny",
    humidity: 78,
    feels_like: 27,
  });

  let updateInfo = (newInfo) => {
    setWeatherData(newInfo);
  };

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "20px",
      }}
    >
      <h2>Wearther App By Karan</h2>
      <SearchBox updateInfo={updateInfo} />
      {weatherData && <InfoBox info={weatherData} />}
    </div>
  );
}
