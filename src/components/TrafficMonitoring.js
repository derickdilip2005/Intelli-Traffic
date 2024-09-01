import React, { useState } from 'react';
import './TrafficMonitoring.css';
import CameraFeeds from './CameraFeeds';

function TrafficMonitoring() {
  const [overrideMessage, setOverrideMessage] = useState('');

  const handleOverrideSubmit = (event) => {
    event.preventDefault();
    setOverrideMessage('Override Successful');
    setTimeout(() => {
      setOverrideMessage('');
    }, 3000);
  };

  return (
    <div className="traffic-monitoring-pane">
      <h1>Traffic Monitoring</h1>
      {overrideMessage && <div className="override-message">{overrideMessage}</div>}
      <div className="pane1"> <center> <CameraFeeds /> </center> </div>
      <div className="pane"><b>Number of Vehicles in Each Route</b>
      <hr />
        <div className="metric-card">
           <p>Route 1: 24</p>
           <p>Route 2: 26</p>
           <p>Route 3: 25</p>
           <p>Route 4: 38</p>
        </div>
    </div>
    <div className="pane"><b>Allocated Time for Each Route</b>
    <hr />
        <div className="metric-card">
            <p>Route 1 Allocated Time: Nil</p>
            <p>Route 2 Allocated Time: Nil</p>
            <p>Route 3 Allocated Time: Nil</p>
            <p>Route 4 Allocated Time: 36</p>
        </div>
    </div>
    <div className="pane"><b>Average Speed and Flow Rates</b>
    <hr />
        <div className="metric-card">
            <p>Route 1 Speed: 46</p>
            <p>Route 2 Speed: 54</p>
            <p>Route 3 Speed: 59</p>
            <p>Route 4 Speed: 32</p>
        </div>
    </div>
    <div className="pane"><b>Historical Traffic Data</b>
    <hr />
        <div className="metric-card">
           <p>Past Traffic Data: </p>
           <p><button>View Historical Data</button></p>
        </div>
    </div>
    <div className="pane2"><b>Control Panel</b>
    <hr />
    <div className="metric-card">
        <p>Traffic Light Controls: 36</p>
        <hr />
        <p>Manual Override: </p>
        <form onSubmit={handleOverrideSubmit}>
            <label>
                <p>Select Route :</p> 
                <select>
                    <option value="route-1">Route-1</option>
                    <option value="route-2">Route-2</option>
                    <option value="route-3">Route-3</option>
                    <option value="route-4">Route-4</option>
                </select>
            </label>
            <label>
                <p>Green signal time : </p>
                <input type="text" placeholder="Enter the Green signal time: " />
            </label>
            <br />
            <button type="submit" className="report-button">Override</button>
        </form>
    </div>
    </div>
  </div>
  );
}

export default TrafficMonitoring;