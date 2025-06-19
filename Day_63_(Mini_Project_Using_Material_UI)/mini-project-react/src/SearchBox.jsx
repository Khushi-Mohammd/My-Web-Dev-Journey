import { useState } from "react";

import { TextField, Button } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

import "./SearchBox.css";

function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");
  const [error, setError] = useState(false);

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";

  const getWeatherInfo = async () => {
    try {
      let response = await fetch(
        `${API_URL}?q=${city}&appid=${
          import.meta.env.VITE_API_KEY
        }&units=metric`
      );
      let jsonResponse = await response.json();
      console.log(jsonResponse);

      let result = {
        city: city,
        feelsLike: jsonResponse.main.feels_like,
        humidity: jsonResponse.main.humidity,
        temp: jsonResponse.main.temp,
        tempMax: jsonResponse.main.temp_max,
        tempMin: jsonResponse.main.temp_min,
        weather: jsonResponse.weather[0].description,
      };

      setError(false);

      console.log(result);
      return result;
    } catch (err) {
      throw err;
    }
  };

  const handleChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      let newInfo = await getWeatherInfo();
      updateInfo(newInfo);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="SearchBoxDiv">
      <form onSubmit={handleSubmit}>
        <div className="InputDiv">
          <TextField
            id="outlined-basic"
            label="City Name"
            variant="outlined"
            type="search"
            required
            value={city}
            onChange={handleChange}
          />
        </div>

        <div className="ButtonDiv">
          <Button
            variant="contained"
            type="submit"
            size="large"
            startIcon={<SearchIcon />}
          >
            Search
          </Button>
        </div>
        {error && <p style={{ color: "red" }}>No such place in our API</p>}
      </form>
    </div>
  );
}

export default SearchBox;
