import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import CameraFeeds from './components/CameraFeeds'; // Import the CameraFeeds component

function App() {
  return (
    <div className="App">
      <Header />
      <div className="main-content">
        <Sidebar />
        <Dashboard />
        <CameraFeeds /> {/* Add the CameraFeeds component here */}
      </div>
    </div>
  );
}

export default App;
