function WeatherCard({ weather }) {
  return (
    <div className="bg-white text-blue-700 mt-6 p-6 rounded-lg shadow-md text-center w-80">
      <h2 className="text-2xl font-semibold mb-2">{weather.name}</h2>
      <p className="text-lg">{weather.weather[0].description}</p>
      <p className="text-3xl my-2">{weather.main.temp}°C</p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} m/s</p>
    </div>
  );
}

export default WeatherCard;
