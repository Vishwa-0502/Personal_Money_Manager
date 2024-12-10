// Chart.jsx
import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Chart = ({ totalAssets, totalLiabilities, netWorth }) => {
  const data = {
    labels: ["Total Assets", "Total Liabilities", "Net Worth"],
    datasets: [
      {
        label: "Amount (₹)",
        data: [totalAssets, totalLiabilities, netWorth],
        backgroundColor: ["#4caf50", "#f44336", "#2196f3"],
        borderRadius: 8,
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Net Worth Overview",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return `₹${value.toLocaleString()}`;
          },
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default Chart;
