import React, { useState } from "react";
import "./App.css";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:5000/weather?city=${city}`);
      const data = await response.json();
      setWeather(data);
    } catch (err) {
      console.error("Error fetching weather:", err);
    }
  };

  return (
    <div className="App">
      <h1>🌤 Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city"
      />
      <button onClick={getWeather}>Get Weather</button>

      {weather && (
        <div className="weather-info">
          <h2>{weather.city}</h2>
          <p>{weather.weather}</p>
          <p>{weather.temperature} °C</p>
        </div>
      )}
    </div>
  );
}

export default App;
