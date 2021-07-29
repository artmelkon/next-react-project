import React, { useState } from "react";

import ExpensesList from './ExpensesList';
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";
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
  });

  console.log('filtered', filteredExpenses)

  return (
    <Card className="expenses">
      <ExpensesFilter
        selected={selectedYear}
        onAddFilterYear={addFilterYear}
        years={years}
      />
      <ExpensesChart expenses={filteredExpenses} />
      <ExpensesList items={filteredExpenses} />
    </Card>
  );
};

export default Expenses;
