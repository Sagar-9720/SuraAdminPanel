import React from "react";
import { Pie } from "react-chartjs-2";
import "chart.js/auto";

const Feedback = () => {
  const data = {
    labels: ["Positive", "Neutral", "Negative"],
    datasets: [
      {
        label: "Feedback",
        data: [65, 20, 15],
        backgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
        hoverBackgroundColor: ["#36A2EB", "#FFCE56", "#FF6384"],
      },
    ],
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Feedback Page</h2>
      <Pie data={data} />
    </div>
  );
};

export default Feedback;
