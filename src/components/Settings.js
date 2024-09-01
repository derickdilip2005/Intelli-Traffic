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
        <p>IntelliTraffic is an AI-powered traffic management system designed to optimize urban transportation. 
        It provides real-time monitoring, dynamic traffic light control, and intelligent incident response, 
        all aimed at reducing congestion and improving road safety.</p>
            <p><b>Key Features: </b>
            Real-Time Monitoring: Tracks vehicle counts, speeds, and flow rates.
            Dynamic Signal Control: Adjusts traffic light timings based on live data.
            Violation Management: Detects and manages traffic violations automatically.
            Emergency Response: Prioritizes routes for emergency vehicles and coordinates with authorities.
            Data Insights: Offers analytics for better traffic management decisions.</p>
            <p><b>Mission & Vision: </b>
            We aim to create safer, more efficient roads through AI, envisioning smart cities with intelligent, adaptive traffic systems.
        </p>
      </div>

      <div className="settings-option">
        <h3>FAQ for Traffic Administrator</h3>
        <details>
            <summary>How to manage traffic violations?</summary>
            <p>To manage traffic violations, navigate to the "Violations" section in the dashboard. 
            Here, you can view a summary of all detected violations, including details on specific types such as speeding and signal jumping. 
            You can also manually report additional violations by selecting the violation type, 
            entering the vehicle details, and submitting the report. Alerts and notifications can be sent for severe violations, 
            ensuring prompt action is taken.</p>
        </details>
        <details>
            <summary>How to view and analyze traffic data?</summary>
            <p>You can view and analyze traffic data through the "Traffic Monitoring" pane. This section displays real-time data such as the number of vehicles on each route, allocated signal times, average speeds, and flow rates. Historical traffic data can also be accessed by clicking the "View Historical Data" button. These insights help in understanding traffic patterns and making informed decisions to optimize traffic flow.</p>
        </details>
        <details>
            <summary>How to respond to emergency alerts?</summary>
            <p>Emergency alerts are managed within the "Emergency Alerts" section of the dashboard. This section provides an overview of ongoing emergencies, allowing you to quickly assess and coordinate responses. You can dispatch emergency vehicles, adjust traffic signal timings to prioritize emergency routes, and communicate with local authorities through integrated channels. The system also logs historical emergency data for further analysis and reporting.</p>
        </details>
      </div>

      <div className="settings-option">
        <h3>Admin Logout</h3>
        <form>
            <button  type="submit" className="logout-button">Logout</button>
        </form>
      </div>
    </div>
  );
}

export default Settings;
