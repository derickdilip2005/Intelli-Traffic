import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li>Dashboard Overview</li>
        <li>Traffic Monitoring</li>
        <li>Violations</li>
        <li>Emergency Alerts</li>
        <li>Settings</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
