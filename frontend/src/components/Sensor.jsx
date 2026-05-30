function Sensor({ sensorData }) {
  return (
    <section className="card">
      <h2>Live Sensor Telemetry</h2>

      <div className="grid">
        <div className="metric">
          <span>Temperature</span>
          <strong>{sensorData.temperature} °C</strong>
        </div>

        <div className="metric">
          <span>pH</span>
          <strong>{sensorData.ph}</strong>
        </div>

        <div className="metric">
          <span>Dissolved Oxygen</span>
          <strong>{sensorData.oxygen}%</strong>
        </div>

        <div className="metric">
          <span>Turbidity</span>
          <strong>{sensorData.turbidity} NTU</strong>
        </div>
      </div>
    </section>
  );
}

export default Sensor;