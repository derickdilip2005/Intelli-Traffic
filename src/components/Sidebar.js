import React from 'react';
import './Sidebar.css';

function Sidebar({ onOptionClick }) {
  return (
    <aside className="sidebar">
      <ul>
        <li onClick={() => onOptionClick('dashboard')}>Dashboard Overview</li>
        <li onClick={() => onOptionClick('traffic-monitoring')}>Traffic Monitoring</li>
        <li onClick={() => onOptionClick('violations')}>Violations</li>
        <li onClick={() => onOptionClick('emergency-alerts')}>Emergency Alerts</li>
        <li onClick={() => onOptionClick('settings')}>Settings</li>
      </ul>
    </aside>
  );
}

export default Sidebar;
