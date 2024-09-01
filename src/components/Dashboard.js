import React from 'react';
import './Dashboard.css';
import LineGraph from './LineGraph';
import TrafficMap from './TrafficMap';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="traffic-map"><center><b>Traffic Flow Map </b> </center><TrafficMap /> </div>
      <div className="key-metrics">
        <div className="card"><b>Overall Traffic Density: </b>35.31</div>
        <div className="card2"><h2><b>Signal Location: </b></h2><b>Anna Nagar signal</b><h2><b>Nearest police station: </b></h2><b>K4 Anna Nagar Police Booth</b></div>
        <div className="card"><b>Number of Violations: </b>120</div>
      </div>
      <div className="controls-alerts">
        <div className="traffic-light-controls"><b>Traffic Light Control Panel: </b>
        <p>
        <button>Click to view</button>
        </p>
        </div>
        <div className="violation-alerts"><b>Average Green Time </b><p>36</p></div>
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
