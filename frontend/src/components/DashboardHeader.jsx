function DashboardHeader({
  selectedSystem,
  role,
  isOperator,
  onBackToFleet,
  onOpenChat,
  unreadCount,
  onDownloadReport,
  onLogout,
}) {
  return (
    <header className="header">
      <div>
        <h1>{selectedSystem.id} Dashboard</h1>
        <p>
          Location: {selectedSystem.location} | Role: {role}
        </p>
      </div>

      <div className="header-actions">
        {isOperator && (
          <button className="secondary-btn" onClick={onBackToFleet}>
            Back to Fleet
          </button>
        )}

        <button className="chat-toggle-btn" type="button" onClick={onOpenChat}>
          💬 Chat
          {unreadCount > 0 && (
            <span className="notification-badge">{unreadCount}</span>
          )}
        </button>

        <button className="secondary-btn" onClick={onDownloadReport}>
          Download Report
        </button>

        <button className="secondary-btn" onClick={onLogout}>
          Logout
        </button>
      </div>
    </header>
  );
}

export default DashboardHeader;