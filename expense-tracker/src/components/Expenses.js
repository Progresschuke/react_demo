import Card from './Wrapper/Card';
import './Expenses.css';
import ExpensesFilter from './Filter/ExpensesFilter';
import { useState } from 'react';
import ExpensesList from './ExpenseList/ExpenseList';
import ExpensesChart from './Chart/ExpensesChart';

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState('2018');

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className='expenses'>
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />
      <ExpensesChart expenses={filteredExpenses} />
      {/* {filteredExpenses.length === 0 ? (
        <p>No Expenses Found</p>
      ) : (
        filteredExpenses.map((expense) => (
          <ExpenseItem
            key={expense.id}
            date={expense.date}
            title={expense.title}
            amount={expense.amount}
          />
        ))
      )} */}
      <ExpensesList list={filteredExpenses} />
    </Card>
  );
}

export default Expenses;
