function Control({
  isOperator,
  status,
  pumpOn,
  lightOn,
  onTogglePump,
  onToggleLight,
  onEmergencyStop,
}) {
  return (
    <section className="card">
      <h2>Actuator Control</h2>

      {!isOperator && (
        <p className="warning-text">View-only role. Control buttons are disabled.</p>
      )}

      <button
        className="emergency-btn"
        disabled={!isOperator}
        onClick={onEmergencyStop}
      >
        EMERGENCY STOP
      </button>

      <div className="control-row">
        <span>Pump</span>
        <button disabled={!isOperator || status !== "ONLINE"} onClick={onTogglePump}>
          {pumpOn ? "Turn Pump Off" : "Turn Pump On"}
        </button>
      </div>

      <div className="control-row">
        <span>LED Light Rods</span>
        <button disabled={!isOperator || status !== "ONLINE"} onClick={onToggleLight}>
          {lightOn ? "Turn Lights Off" : "Turn Lights On"}
        </button>
      </div>

      <div className="state-box">
        <p>Pump State: {pumpOn ? "ON" : "OFF"}</p>
        <p>Light State: {lightOn ? "ON" : "OFF"}</p>
      </div>
    </section>
  );
}

export default Control;