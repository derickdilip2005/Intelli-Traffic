import React from 'react';
import './Alerts.css';

function EmergencyAlerts() {
  return (
    <div className="emergency-alerts-pane">
      {/* Emergency Incident Overview */}
      <div className="section-box incident-overview">
        <h2>Emergency Incident Overview</h2>
        <div className="incident-list">
          <div className="incident-item critical">
            <span className="incident-icon">&#9888;</span>
            <span className="incident-description">Road Accident at Intersection A</span>
          </div>
          <div className="incident-item moderate">
            <span className="incident-icon">&#128659;</span>
            <span className="incident-description">Fire reported near Park B</span>
          </div>
        </div>
      </div>

      {/* Response Coordination */}
      <div className="section-box response-coordination">
        <h2>Response Coordination</h2>
        <div className="coordination-dashboard">
          <button className="dispatch-button">Dispatch Ambulance</button>
          <button className="dispatch-button">Dispatch Fire Truck</button>
          <p>Available Resources:</p>
          <ul>
            <li>Hospital X: 2 ambulances available</li>
            <li>Fire Station Y: 1 truck available</li>
          </ul>
        </div>
      </div>

      {/* Communication Channels */}
      <div className="section-box communication-channels">
        <h2>Communication Channels</h2>
        <div className="communication-tools">
          <button className="communication-button">Contact Local Authorities</button>
          <button className="communication-button">Send Public Announcement</button>
        </div>
      </div>

      {/* Historical Emergency Data */}
      <div className="section-box historical-data">
        <h2>Historical Emergency Data</h2>
        <div className="incident-logs">
          <p>Incident Log 1: Accident on 23rd August - Response Time: 10 mins</p>
          <p>Incident Log 2: Fire on 15th August - Response Time: 15 mins</p>
          <button className="report-button">Generate Report</button>
        </div>
      </div>

      {/* Automated Traffic Management */}
      <div className="section-box automated-management">
        <h2>Automated Traffic Management</h2>
        <div className="traffic-management-tools">
          <button className="management-button">Enable Priority Signal Control</button>
          <button className="management-button">Dynamic Rerouting</button>
        </div>
      </div>
    </div>
  );
}

export default EmergencyAlerts;
