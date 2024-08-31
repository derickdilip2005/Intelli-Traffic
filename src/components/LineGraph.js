// src/components/LineGraph.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

function LineGraph() {
  const data = {
    labels: ['1:00 PM - 1:30 PM', '1:30 PM - 2:00 PM', '2:00 PM - 2:30 PM', '2:30 PM - 3:00 PM', '3:00 PM - 3:30 PM'], // X-axis labels
    datasets: [
      {
        label: 'Number of Vehicles',
        data: [50, 75, 100, 120, 90], // Y-axis data
        fill: false,
        backgroundColor: 'rgba(75,192,192,0.2)',
        borderColor: 'rgba(75,192,192,1)',
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      x: {
        title: {
          display: true,
          text: 'Time Interval',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Vehicle Count',
        },
        min: 0,
        max: 150,
      },
    },
  };

  return (
    <div>
      <h3>Vehicle Count Over Time</h3>
      <Line data={data} options={options} />
    </div>
  );
}

export default LineGraph;
