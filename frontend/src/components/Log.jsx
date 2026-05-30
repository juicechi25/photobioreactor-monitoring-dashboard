function ActivityLog({ logs }) {
  return (
    <section className="card">
      <h2>Activity Log</h2>

      <div className="log-container">
        {logs.length === 0 ? (
          <p>No events recorded.</p>
        ) : (
          logs.map((log) => (
            <div key={log.id} className="log-entry">
              <span>{log.timestamp}</span>
              <p>{log.message}</p>
            </div>
          ))
        )}
      </div>
    </section>
  );
}

export default ActivityLog;