import React, { useState } from 'react';
import './Settings.css';

function Settings() {
  const [theme, setTheme] = useState('light');

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.body.className = newTheme;
  };

  return (
    <div className={`settings-pane ${theme}`}>
      <h2>Settings</h2>

      <div className="settings-option">
        <h3>Theme Change</h3>
        <button onClick={handleThemeChange}>
          Switch to {theme === 'light' ? 'Dark' : 'Light'} Theme
        </button>
      </div>

      <div className="settings-option">
        <h3>About</h3>
        <p>Welcome to Intelli Traffic, your comprehensive solution for smarter, safer, and more efficient traffic management.</p>
        <p>Our app leverages cutting-edge technology to monitor and analyze traffic patterns in real-time, helping reduce congestion, 
        improve safety, and optimize transportation networks.
        </p>
      </div>

      <div className="settings-option">
        <h3>FAQ for Traffic Administrator</h3>
        <details>
            <summary>How to manage traffic violations?</summary>
            <p>To manage traffic violations effectively, use automated cameras to detect violations, 
            increase police presence in key areas, educate drivers about traffic laws, analyze data to pinpoint problem areas, 
            and streamline the reporting process.</p>
        </details>
        <details>
            <summary>How to view and analyze traffic data?</summary>
            <p>To view and analyze traffic data, use real-time dashboards to monitor live traffic conditions, 
            access historical data reports for trend analysis, utilize data visualization tools to interpret patterns, 
            and apply analytics software to identify congestion issues and optimize traffic flow.</p>
        </details>
        <details>
            <summary>How to respond to emergency alerts?</summary>
            <p>To respond to emergency alerts, quickly assess the situation using real-time data, 
            coordinate with emergency services, adjust traffic signals to prioritize emergency vehicles, 
            communicate updates to the public, and review and update emergency protocols as needed.</p>
        </details>
      </div>

      <div className="settings-option">
        <h3>Admin Logout</h3>
        <button className="logout-button">Logout</button>
      </div>
    </div>
  );
}

export default Settings;
