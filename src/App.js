import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import CameraFeeds from './components/CameraFeeds'; 
import TrafficMonitoring from './components/TrafficMonitoring'; 
import Violations from './components/Violations';
import EmergencyAlerts from './components/Alerts'; 
import Settings from './components/Settings';

function App() {
  const [activePane, setActivePane] = useState('dashboard'); 

  const handleSidebarClick = (pane) => {
    setActivePane(pane); 
  };

  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Sidebar onOptionClick={handleSidebarClick} /> 
        {activePane === 'dashboard' && (
          <>
            <Dashboard />
            <CameraFeeds />
          </>
        )}
        {activePane === 'traffic-monitoring' && <TrafficMonitoring />} 
        {activePane === 'violations' && <Violations />}
        {activePane === 'emergency-alerts' && <EmergencyAlerts />}
        {activePane === 'settings' && <Settings />} 
      </div>
    </div>
  );
}

export default App;