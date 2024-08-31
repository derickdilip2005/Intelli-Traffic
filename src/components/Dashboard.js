import React from 'react';
import './Dashboard.css';
import LineGraph from './LineGraph';
import TrafficMap from './TrafficMap';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="traffic-map"><center><b>Traffic Flow Map</b> </center><TrafficMap /> </div>
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
          <LineGraph /> 
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
