import DashboardHeader from "./DashboardHeader.jsx";
import Sensor from "./Sensor.jsx";
import LatencyMonitor from "./LatencyMonitor.jsx";
import WeatherCard from "./WeatherCard.jsx";
import Control from "./Control.jsx";
import ActivityLog from "./Log.jsx";
import ChatBox from "./ChatBox.jsx";
import SystemErrors from "./SystemError.jsx";

function Dashboard({
  selectedSystem,
  currentUser,
  role,
  isOperator,
  status,
  latency,
  sensorData,
  weather,
  pumpOn,
  lightOn,
  logs,
  chatOpen,
  unreadCount,
  getWeatherImpact,
  onBackToFleet,
  onOpenChat,
  onCloseChat,
  onDownloadReport,
  onLogout,
  onTogglePump,
  onToggleLight,
  onEmergencyStop,
  systemErrors,
}) {
  return (
    <div className="page">
      <DashboardHeader
        selectedSystem={selectedSystem}
        role={role}
        isOperator={isOperator}
        onBackToFleet={onBackToFleet}
        onOpenChat={onOpenChat}
        unreadCount={unreadCount}
        onDownloadReport={onDownloadReport}
        onLogout={onLogout}
      />

      {isOperator && unreadCount > 0 && (
        <section className="status-banner warning">
          New message from client {selectedSystem.id}
        </section>
      )}

      <section className={`status-banner ${status.toLowerCase()}`}>
        System Status: {status} | Latency: {latency} ms
      </section>

      <main className="dashboard">
        <Sensor sensorData={sensorData} />

        <LatencyMonitor latency={latency} />

        <WeatherCard
          weather={weather}
          selectedSystem={selectedSystem}
          getWeatherImpact={getWeatherImpact}
        />

        <Control
          isOperator={isOperator}
          status={status}
          pumpOn={pumpOn}
          lightOn={lightOn}
          onTogglePump={onTogglePump}
          onToggleLight={onToggleLight}
          onEmergencyStop={onEmergencyStop}
        />

        {isOperator && <ActivityLog logs={logs} />}
      </main>

      <ChatBox
        systemId={selectedSystem.id}
        currentUser={currentUser}
        isOpen={chatOpen}
        onClose={onCloseChat}
      />
      {isOperator && <SystemErrors errors={systemErrors} />}
    </div>
  );
}

export default Dashboard;