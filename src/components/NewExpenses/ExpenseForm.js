import React, {useState} from "react";

import './ExpenseForm.css';

// class ExpenseForm extends React.Component {
//   state = {
//     title:'',
//     amount:'',
//     date:''
//   }

const ExpenseForm = (props) => {

  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const [enteredFile, setEnteredFile] = useState('');

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value)
  }

  const amountChangeHandler = (e) => {
    setEnteredAmount(e.target.value)
  }

  const dateChangeHandler = (e) => {
    setEnteredDate(e.target.value)
  }

  const fileChangeHandler = (e) => {
    // console.log(e.target.files[0])
    setEnteredFile(e.target.files[0])
  }

  const submitHandler = (e) => {
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
      file: enteredFile
    }


    props.onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    // setEnteredFile(e.); 
    // because this input type is file whave a bit different aproach
    document.getElementById('file').value = null
  }

  return (
    <form onSubmit={e => submitHandler(e)}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="">Title</label>
          <input type="text" name="title" onChange={titleChangeHandler} value={enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Amount</label>
          <input type="text" name="amount" onChange={amountChangeHandler} value={enteredAmount} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input type="date" name="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={enteredDate} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="">Date</label>
          <input type="file" id="file" name="file" onChange={fileChangeHandler} />
        </div>
      </div>
      <div className="new-expense__actions}">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
