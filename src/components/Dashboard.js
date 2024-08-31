import React from 'react';
import './Dashboard.css';
import LineGraph from './LineGraph';


function Dashboard() {
  return (
    <div className="dashboard">
      <div className="traffic-map"><b>Traffic Flow Map</b></div>
      <div className="key-metrics">
        <div className="card"><b>Overall Traffic Density</b></div>
        <div className="card"><b>Average Wait Time</b></div>
        <div className="card"><b>Number of Violations</b></div>
      </div>
      <div className="controls-alerts">
        <div className="traffic-light-controls"><b>Traffic Light Control Panel</b></div>
        <div className="violation-alerts"><b>Violation Alerts</b></div>
      </div>
      <div className="graphs-cameras">
        <div className="real-time-graphs">
          <LineGraph /> {/* Real-Time Line Graph */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
