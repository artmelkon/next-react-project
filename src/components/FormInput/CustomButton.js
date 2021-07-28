import React from 'react';

import './CustomButton.css';

const CustomButton = (props) => {
  let clicked = false;

  const newExpenseHandler = (e) => {
    const {type} = e.nativeEvent;
    if(type) {
      clicked = true;
      console.log(type)
      props.onAddNewExpesne(clicked)
    }
  }


  return (
    <input type="button" className="custom-input__btn" value="Add New Expense" onClick={newExpenseHandler} />
  )
}

export default CustomButton;