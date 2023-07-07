import React from 'react';
import TodoForm from './TodoForm';
import './NewTodo.css';

const NewTodo = (props) => {
  const addNewGoal = (enteredTask) => {
    const todoTask = {
      ...enteredTask,
      id: Math.random().toString(),
    };
    console.log(todoTask);
    props.onAddGoal(todoTask);
  };
  return (
    <div className='newtodo'>
      <TodoForm onSubmitForm={addNewGoal} />
    </div>
  );
};

export default NewTodo;
