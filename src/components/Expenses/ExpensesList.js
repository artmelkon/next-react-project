import React from 'react';

import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = ({items}) => {
  console.log('items ', items)
  let expensesContent = <p>No Expense Found</p>;

  console.log(items.length)

  if(items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no expenss!</h2>
  }
  
  return (
    <ul className="expenses-list">
      {
        items.map((item) => (
          <ExpenseItem key={item.id} {...item} />
        ))
      }
    </ul>
  )
}

export default ExpensesList;