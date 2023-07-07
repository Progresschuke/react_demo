import React from 'react';
import './ExpenseList.css';
import ExpenseItem from '../ExpenseItem';

const ExpensesList = (props) => {
  if (props.list.length === 0) {
    return <h2 className='expenses-list_fallback'>Found no expenses</h2>;
  }
  return (
    <ul className='expenses-list'>
      {props.list.map((expense) => (
        <ExpenseItem
          key={expense.id}
          date={expense.date}
          title={expense.title}
          amount={expense.amount}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
