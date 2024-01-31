import "./StatisticsPublisher.css"


import React, { useEffect, useState } from "react";
import AnimatedChart from "./AnimatedChart";
import SplieGraph from "./SplieGraph";
import ColoumGraph from "./ColoumGraph";
import Table from "./Table"

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);





const StatisticsPublisher = () => {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (counter === 65) {
        clearInterval(intervalId);
      } else {
        setCounter((prevCounter) => prevCounter + 1);
      }
    }, 10);

    return () => clearInterval(intervalId);
  }, [counter]);
  const data = {
    labels: ["monday", "tuesday", "wednesday", "thursday", "friday"],
    datasets: [
      {
        label: "343",
        data: [13, 8, 3, 2, 12],
        backgroundColor: "rgba(133, 7, 110, 0.85)",
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "355453",
        data: [3, 5, 5, 4, 7],
        backgroundColor: "black",
        borderColor: "black",
        borderWidth: 1,
      },
      {
        label: "182019",
        data: [1, 8, 10, 19, 5],
        backgroundColor: "yellow",
        borderColor: "black",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "category",
        labels: ["january", "february", "march", "april", "March"],
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div>
      <div className="container">
        <div className="col-12 sana-small-con mx-auto">
          <h3 className="sana-stat-h3 mt-5">Statistics</h3>
          <p className="first-pera">NOTHING TO SEE HERE (YET)</p>
          <p className="sec-pera">
            This page usually displays clicks, impressions, revenue, and other
            statistics. <br /> Head over to the Websites tab to add your
            websites and install the codes to any page
          </p>
          <p className="third-pera">
            For more information about how to use statistics{" "}
            <a href="" className="sana-a-tag">
              see our Help Center
            </a>{" "}
          </p>
        </div>
        <div className="row">
          <div className="col-md-6 mt-5 p-4">
            <div>
              <Bar data={data} options={options} />
            </div>
          </div>
          <div className="col-md-6 p-4 mt-5">
            <div className="sana-circle-graph">
              <div className="sana-skill">
                <div className="sana-outer">
                  <div className="sana-inner">
                    <div className="sana-number">{`${counter}%`}</div>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  version="1.1"
                  width="160px"
                  height="160px"
                >
                  <defs>
                    <linearGradient id="GradientColor">
                      <stop offset="0%" stopColor="#e91e63" />
                      <stop offset="100%" stopColor="#673ab7" />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="80"
                    cy="80"
                    r="70"
                    strokeLinecap="round"
                    fill="url(#GradientColor)"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="row ">
          <div className="col-md-3 m-5 sana-splie-graph">
            <SplieGraph />
          </div>
          <div className="col-md-3 m-5 sana-wave-anim ">
            <AnimatedChart />
          </div>
          <div className="col-md-3 m-5 sana-coloum">
            <ColoumGraph />
          </div>
        </div>
        <div className="row">
          <div className="col-md-10">

          </div>

        </div>
      </div>
    </div>
  );
};

export default StatisticsPublisher;
