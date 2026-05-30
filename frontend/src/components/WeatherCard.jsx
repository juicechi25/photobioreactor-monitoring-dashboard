function WeatherCard({ weather, selectedSystem, getWeatherImpact }) {
  return (
    <section className="card">
      <h2>Outdoor Weather</h2>

      {weather ? (
        <>
          <div className="grid">
            <div className="metric">
              <span>Air Temperature</span>
              <strong>{weather.temperature_2m} °C</strong>
            </div>

            <div className="metric">
              <span>Humidity</span>
              <strong>{weather.relative_humidity_2m}%</strong>
            </div>

            <div className="metric">
              <span>Rainfall</span>
              <strong>{weather.rain} mm</strong>
            </div>

            <div className="metric">
              <span>Wind Speed</span>
              <strong>{weather.wind_speed_10m} km/h</strong>
            </div>
          </div>

          <div className="state-box">
            <p>{getWeatherImpact()}</p>
          </div>
        </>
      ) : (
        <p>Loading weather for {selectedSystem.location}...</p>
      )}
    </section>
  );
}

export default WeatherCard;