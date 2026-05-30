function LatencyMonitor({ latency }) {
  return (
    <section className="card">
      <h2>Latency Monitor</h2>

      <div className="latency-box">
        <strong>{latency} ms</strong>
        <p>
          {latency <= 200
            ? "Good live update speed"
            : latency <= 1000
            ? "Warning: delayed updates"
            : "Unsafe: stale data"}
        </p>
      </div>
    </section>
  );
}

export default LatencyMonitor;