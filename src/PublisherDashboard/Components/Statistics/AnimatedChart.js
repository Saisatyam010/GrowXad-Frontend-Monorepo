import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";

const AnimatedChart = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevCounter) => (prevCounter + 1) % 10);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const data = {
    labels: Array.from({ length: 10 }, (_, index) => index + 1),
    datasets: [
      {
        label: "Current server load",
        data: Array.from(
          { length: 10 },
          (_, index) => Math.sin(index + counter) + 2
        ),
        fill: false,
        borderColor: "rgba(234, 226, 228, 0.8)",
      },
    ],
  };

  const options = {
    plugins: {
      interaction: {
        mode: "nearest",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        max: 4,
      },
    },
  };

  return (
    <div className="h-70">  
      <h2 className="text-items-start pt-3">49.4%</h2>
      <p className="text-items-start text-secondary">34.6% avg</p>
      <Line data={data} options={options} />
    </div>
  );
};

export default AnimatedChart;
