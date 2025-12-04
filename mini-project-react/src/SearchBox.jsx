import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import "./SearchBox.css";

export default function SearchBox({ updateInfo }) {
  let [error, setError] = useState(false);
  let [city, setCity] = useState(null);
  const API_URL = "https://api.openweathermap.org/data/2.5/weather?";
  const API_KEY = "f611e6a81fe474d2ac7748a7a2025815";

  let fetchWeather = async () => {
    try {
      const url = `${API_URL}q=${city}&appid=${API_KEY}&units=metric`;

      const response = await fetch(url);
      const jsonResponse = await response.json();

      let result = {
        city: jsonResponse.name,
        temp: jsonResponse.main.temp,
        temp_min: jsonResponse.main.temp_min,
        temp_max: jsonResponse.main.temp_max,
        weather: jsonResponse.weather[0].description,
        humidity: jsonResponse.main.humidity,
        feels_like: jsonResponse.main.feels_like,
      };
      console.log(result);
      return result;
    } catch (error) {
      throw error;
    }
  };

  let handleChange = (event) => {
    setCity(event.target.value);
  };

  let handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await fetchWeather(city);
      updateInfo(newInfo);
    } catch (error) {
      setError(true);
    }
  };
  return (
    <div className="search-box">
      <form onSubmit={handleSubmit}>
        <TextField
          id="city"
          label="City Name"
          variant="outlined"
          required
          value={city}
          onChange={handleChange}
        />
        <br />
        <br />
        <Button variant="contained" type="submit">
          Search
        </Button>
        {error && <p style={{ color: " red" }}>No Such Place Exists</p>}
      </form>
    </div>
  );
}
