import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import CustomButton from "../FormInput/CustomButton";
import "./NewExpenses.css";

const NewExpenses = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseDate) => {
    const expenseData = {
      ...enteredExpenseDate,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false)
  };

  const isButtnClicked = (isClicked) => {
    console.log(isClicked);
    setIsEditing(isClicked);
  };

  const cancelEditing = () => {
    setIsEditing(false)
  }

  return (
    <div className="new-expense">
      {!isEditing && <CustomButton onAddNewExpesne={isButtnClicked} />}
      {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelButton={cancelEditing} />}
    </div>
  );
};

export default NewExpenses;
