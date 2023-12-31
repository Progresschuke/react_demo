import React, { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // console.log(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
    console.log('changed');
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log('changed');
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className='new-expense_controls'>
        <div className='new-expense_control'>
          <label>Title</label>
          <input
            type='text'
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className='new-expense_control'>
          <label>Amount</label>
          <input
            type='number'
            min='0.01'
            value={enteredAmount}
            step='0.01'
            onChange={amountChangeHandler}
          />
        </div>
        <div className='new-expense_control'>
          <label>Date</label>
          <input
            type='date'
            value={enteredDate}
            min='2019- 01- 01'
            max='2022- 12- 31'
            onChange={dateChangeHandler}
          />
        </div>
        <div className='new-expense_actions'>
          <button type='button' onClick={props.onCancel}>
            Cancel
          </button>
          <button type='submit'>Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
