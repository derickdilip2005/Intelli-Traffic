import React, { useState } from 'react';
import './Violations.css';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary components for the chart
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function Violations() {
  const [reportMessage, setReportMessage] = useState('');

  const handleReportSubmit = (event) => {
    event.preventDefault();
    setReportMessage('Reported vehicle');
    setTimeout(() => {
      setReportMessage('');
    }, 3000); // The message will disappear after 3 seconds
  };

  // Data for the chart
  const data = {
    labels: ['1:30 PM - 2:00 PM', '2:00 PM - 2:30 PM', '2:30 PM - 3:00 PM', '3:00 PM - 3:30 PM'],
    datasets: [
      {
        label: 'Number of Violations',
        data: [5, 9, 2, 6], // Example data, replace with actual values
        borderColor: 'rgba(75, 192, 192, 1)',
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        fill: true,
      },
    ],
  };

  // Options for the chart
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time Intervals',
        },
      },
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: 'Number of Violations',
        },
      },
    },
  };

  return (
    <div className="violations-pane">
      {reportMessage && <div className="report-message">{reportMessage}</div>}
      
      <div className="section-box summary-section">
        <h2>Traffic Violations Summary</h2>
        <p>Total Violations Detected: <b>120</b></p>
        <div className="category-section">
          <p>Speeding: <b>80</b></p>
          <p>Signal Jumping: <b>40</b></p>
        </div>
      </div>

      <div className="section-box statistics-section">
        <h2>Violation Statistics</h2>
        <div className="chart-container">
          <Line data={data} options={options} />
        </div>
      </div>

      <div className="section-box alerts-section">
        <h2>Alerts and Notifications</h2>
        <p>Severe Violations:</p>
        <ul>
          <li>Speeding in school zones: 5 cases</li>
          <li>Repeated signal jumping: 3 cases</li>
        </ul>
        <button className="alert-button">Send Notification</button>
      </div>

      <div className="section-box reporting-section">
        <h2>Manual Reporting</h2>
        <form onSubmit={handleReportSubmit}>
          <label>
            Violation Type:
            <select>
              <option value="speeding">Speeding</option>
              <option value="signal-jumping">Signal Jumping</option>
            </select>
          </label>
          <label>
            Vehicle Details:
            <input type="text" placeholder="Vehicle Number or Details" />
          </label>
          <button type="submit" className="report-button">Submit Report</button>
        </form>
      </div>
    </div>
  );
}

export default Violations;
