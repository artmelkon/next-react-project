import React from "react";

import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = ({ dataPoints }) => {
  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.id}
          value={dataPoint.value}
          maxValue={null}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
