import React from 'react';
import './TrafficMonitoring.css';
import CameraFeeds from './CameraFeeds';

function TrafficMonitoring() {
  return (
    <div className="traffic-monitoring-pane">
      <h1>Traffic Monitoring</h1>
      <div className="pane1"> <center> <CameraFeeds /> </center> </div>
      <div className="pane"><b>Number of Vehicles in Each Route</b>
      <hr />
        <div className="metric-card">
           <p>Route 1: Number of Vehicles</p>
           <p>Route 2: Number of Vehicles</p>
           <p>Route 3: Number of Vehicles</p>
           <p>Route 4: Number of Vehicles</p>
        </div>
    </div>
    <div className="pane"><b>Allocated Time for Each Route</b>
    <hr />
        <div className="metric-card">
            <p>Route 1 Allocated Time: Time</p>
            <p>Route 2 Allocated Time: Time</p>
            <p>Route 3 Allocated Time: Time</p>
            <p>Route 4 Allocated Time: Time</p>
        </div>
    </div>
    <div className="pane"><b>Average Speed and Flow Rates</b>
    <hr />
        <div className="metric-card">
            <p>Route 1 Speed: Speed</p>
            <p>Route 2 Speed: Speed</p>
            <p>Route 3 Speed: Speed</p>
            <p>Route 4 Speed: Speed</p>
        </div>
    </div>
    <div className="pane"><b>Historical Traffic Data</b>
    <hr />
        <div className="metric-card">
           <p>Past Traffic Data: <b>Historical Data Display</b></p>
        </div>
    </div>
        <div className="pane"><b>Control Panel</b>
        <hr />
        <div className="metric-card">
            <p>Traffic Light Controls: Control Interface</p>
            <p>Manual Override: Control Interface</p>
        </div>
        </div>
    </div>
  );
}

export default TrafficMonitoring;