import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = ({ items }) => {
  const currentYear = new Date().getFullYear();
  let startYear = 2016;
  const years = [];
  const [selectedYear, setSelectedYear] = useState(currentYear);

  for (startYear; startYear <= currentYear; startYear++) {
    years.push(startYear);
  }
  years.sort((a, b) => {
    return b - a;
  });
  console.log(years);

  const addFilterYear = (enteredYear) => {
    console.log('entered year ', typeof enteredYear);
    setSelectedYear(enteredYear);
  };
  const filteredExpenses = items.filter(expense => {
    return expense.date.getFullYear().toString() === selectedYear.toString();
  })
  let expensesContent = <p>No Expense Found</p>;

  console.log(filteredExpenses.length)

  if(filteredExpenses.length > 0) {
    expensesContent = filteredExpenses.map((item) => {
      return <ExpenseItem key={item.id} {...item} />;
    })
  }

  console.log(items)

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onAddFilterYear={addFilterYear}
        years={years}
      />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
