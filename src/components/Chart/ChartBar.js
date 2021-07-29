import React from 'react';

import './ChartBar.css';

const ChartBar = ({id, value, maxValue, label}) => {
  let chartFillHeight = '0%';
  if(maxValue > 0) {
    chartFillHeight = Math.round((value / maxValue) * 100) + '%';
  }
  return (
    <div key={id} className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{height: chartFillHeight}}></div>
      </div>
      <div className="chart-bar__label">{label}</div>
    </div>
  )
}

export default ChartBar;