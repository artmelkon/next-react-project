import React from 'react';

import './ExpensesFilter.css';

const ExpensesFilter = (props) => {
  const yearChangeHandler = (e) => {
    props.onAddFilterYear(e.target.value);

  }

  return (
    <div className="expenses-filter">
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select name="year" id="year" onChange={yearChangeHandler}>
        {       
          props.years.map(year => {
            return <option key={year} value={year}>{year}</option>
          })
        }
        </select>
      </div>
    </div>
  )
}

export default ExpensesFilter;