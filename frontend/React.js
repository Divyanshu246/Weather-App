import React, { useState } from "react";
import './App.css';

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");

  const fetchWeather = async () => {
    if (!city) return;
    setError("");
    try {
      const response = await fetch(`http://localhost:5000/weather?city=${city}`);
      const data = await response.json();
      if (response.ok) {
        setWeather(data);
      } else {
        setWeather(null);
        setError(data.error);
      }
    } catch (err) {
      setError("Failed to fetch data");
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <input
        type="text"
        placeholder="Enter city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      {weather && (
        <div>
          <h2>{weather.city}</h2>
          <p>{weather.temperature} °C</p>
          <p>{weather.description}</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
            alt="weather icon"
          />
        </div>
      )}
    </div>
  );
}

export default App;
