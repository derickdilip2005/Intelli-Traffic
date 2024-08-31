import React, { useState } from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import CameraFeeds from './components/CameraFeeds'; 
import TrafficMonitoring from './components/TrafficMonitoring'; 

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
        {/* Add other panes here based on activePane */}
      </div>
    </div>
  );
}

export default App;
