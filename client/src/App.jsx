import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);

  const fetchWeather = async () => {
    if (!city) {
      alert('Please enter a city name');
      return;
    }

    try {
      const response = await axios.get(`http://localhost:5001/weather?city=${city}`);
      console.log('Backend Response:', response.data);
      setWeather(response.data);
    } catch (error) {
      console.error('Error:', error.response ? error.response.data : error.message);
      alert('City not found');
    }
  };

  return (
    <div>
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter City"
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {weather && (
        <div>
          <h2>{weather.name}</h2>
          <p>{weather.weather[0].description}</p>
          <p>Temperature: {weather.main.temp} °C</p>
        </div>
      )}
    </div>
  );
}

export default App;
