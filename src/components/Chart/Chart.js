import React from "react";

import "./Chart.css";

import ChartBar from "./ChartBar";

const Chart = ({ dataPoints }) => {
  const dataPointValues = dataPoints.map(dataPoint => dataPoint.value)
  console.log('data point', dataPointValues)
  const totalMaxValue = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => {

        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMaxValue}
            label={dataPoint.label}
          />
        )})
      }
    </div>
  );
};

export default Chart;
