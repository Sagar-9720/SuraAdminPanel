import React from "react";
import { Bar } from "react-chartjs-2";
import "chart.js/auto";

const UserDoubts = () => {
  const data = {
    labels: ["Solved", "Pending", "In Queue"],
    datasets: [
      {
        label: "User Doubts",
        data: [12, 19, 3], // Example data
        backgroundColor: [
          "rgba(75, 192, 192, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(255, 99, 132, 0.2)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 99, 132, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <h1>User Doubts</h1>
      <Bar data={data} options={options} />
    </div>
  );
};

export default UserDoubts;
